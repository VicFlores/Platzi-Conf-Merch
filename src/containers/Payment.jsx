/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const history = useHistory();
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      'ASgIv0hg3upV4kbtxbcdjYvIp0x_ZaCucHMfBteoa7RnKJDKFI8Jfox9NwWRgPilbxKXlUZ1kRwBlCLg',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data /* la info que nos regresa paypal */,
      };

      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <>
      <Helmet>
        <title>Platzi Con Merch - Payment</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TU_USER" />
        <meta name="twitter:creator" content="@TU_USER" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <div className="Payment">
        <div className="Payment-content">
          <h3>Resumen del pedido</h3>
          {cart.map((item) => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
          <div className="Payment-button">
            <PayPalButton
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal()}
              onPaymentStart={() => console.log('Start payment')}
              onPaymentSuccess={(data) => handlePaymentSuccess(data)}
              onPaymentError={(error) => console.log(error)}
              onPaymentCancel={(cancel) => console.log(cancel)}
            />
          </div>
        </div>
        <div />
      </div>
    </>
  );
};

export default Payment;
