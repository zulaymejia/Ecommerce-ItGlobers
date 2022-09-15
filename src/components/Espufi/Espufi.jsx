import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import grid from "../../images/cuadricula1.png"
import arrow from "../../images/arrow.png"

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgdpgpv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
<div className='container-espufi'>
<div>
  <p className='paragraph-primary'>INSTAGRAM</p>
  <h></h>
  <p className='paragraph-secund'>#ESPUFI</p>
  <h></h>
  {<img src={grid} className="grid" alt="grid"/>}
</div>
<div className='container-suscribete'>
<p className="paragraph-primary">NEWSLETTER</p>
      <p className='paragraph-secund'>SUSCRIBITE</p>
      <p>y enterate de todas las novedades</p>
      </div>
<form onSubmit={handleSubmit}>
      <label htmlFor="email">
      </label>
      <div className='container-imail'>
      <input className='text-email'
       placeholder='Ingresa tu email'
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="button-email">
      {<img src={arrow} className="arrow" alt="arrow"/>}
      </button>
      </div>
    </form>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;