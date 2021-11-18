import React, { useEffect, useState } from 'react';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { Alert, CircularProgress } from '@mui/material';
import useAuth from '../../../../src/hooks/useAuth'




const CheckoutForm = ({appointment}) => {
    const {price, patientName, _id} = appointment;
    const [clientSecret, setClientSecret] = useState('');
    const {user} = useAuth();
    const [condition, setCondition] = useState(false);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [process, setProcess] = useState(false);

    const stripe = useStripe();
    const elements = useElements();


    useEffect(()=> {
        fetch('http://localhost:4000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    }, [price])

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        /* card input check */
        if (card == null) {
            return;
        }

        /* card type check */
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        /* error check */
        if(error){
            setError(error.message);
        }
        else{
            setError('');
            console.log(paymentMethod);
        }


        /* payment intent: */
        setProcess(true);
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: user.email
                },
              },
            },
          );


          if(intentError){
              setError(intentError.message);
              setSuccess('');
          }
          else{
              console.log(paymentIntent);
            setSuccess('Your payment is taken successfully');
            setError('');
            setProcess(false);
            //update user appointment after payment:
            const payment = {
                amount: paymentIntent.amount,
                transaction: paymentIntent.client_secret.split('_secret_')[0],
                created: paymentIntent.created,
                last4: paymentMethod.card.last4
            }
            console.log(payment);

            /* error: 404 */
            const url = `http://localhost:4000/usersAppointments/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            setCondition(true);
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {
          process ? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || condition}>
          Pay ${price}
        </button>
      }
    </form>
    {
        error && <Alert severity='error'>{error}</Alert>
    }
    {
        success && <Alert severity='success'>{success}</Alert>
    }
        </div>
    );
};

export default CheckoutForm;