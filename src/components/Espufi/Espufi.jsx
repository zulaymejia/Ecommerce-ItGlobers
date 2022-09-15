import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xrgdpgpv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
<div className='container-espufi'>
<div>
  <p className='paragraph-primary'>INSTAGRAM</p>
  <p className='paragraph-secund'>#ESPUFI</p>
</div>
<div>
  <p></p>
  <p></p>
  <p></p>
</div>
<form onSubmit={handleSubmit}>
      <label htmlFor="email">
      </label>
      <input
       placeholder='email adress'
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
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
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