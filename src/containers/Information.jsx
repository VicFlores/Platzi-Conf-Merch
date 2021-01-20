/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    addToBuyer(buyer);

    history.push('/checkout/payment');
  };

  return (
    <>
      <Helmet>
        <title>Platzi Con Merch - Information</title>
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
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Información de contacto</h2>
          </div>

          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre completo" name="name" />
              <input type="text" placeholder="Coreo Electrónico" name="email" />
              <input type="text" placeholder="Dirección" name="address" />
              <input type="text" placeholder="apto" name="apto" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="País" name="country" />
              <input type="text" placeholder="Estado" name="state" />
              <input type="text" placeholder="Código postal" name="cp" />
              <input type="text" placeholder="Teléfono" name="phone" />
            </form>
          </div>

          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </div>
          </div>
        </div>

        <div className="Information-sidebar">
          <h3>Pedido</h3>
          {cart.map((item) => (
            <div className="Information-item" key={item.title}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Information;
