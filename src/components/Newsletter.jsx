import { useState } from "react";
import '../assets/css/home/Newsletter.css';
import MUI_Dialog from "./MUI_Dialog";
import jsonp from "jsonp";

export default function Newsletter() {
  const MC_U_VALUE = import.meta.env.VITE_U_VALUE;
  const MC_ID_VALUE = import.meta.env.VITE_ID_VALUE;
  const MC_SERVER = import.meta.env.VITE_MC_SERVER;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('pending');
  const [message, setMessage] = useState('Aguardando suscripción');

  const signupUrl = `https://site.${MC_SERVER}.list-manage.com/subscribe/post-json?u=${MC_U_VALUE}&id=${MC_ID_VALUE}&f_id=0007e7e1f0`;

  let submitDisabilityCondition = !(email.includes("@") && name.trim().length > 0);

  const clearFields = () => {
    setEmail('');
    setName('');
    setStatus('pending');
    setMessage('Aguardando suscripción');
  };

  const answerSubscription = (data) => {
    if (!data) {
      setStatus('error');
      setMessage("Error de conexión.");
      return;
    }
    const { msg, result } = data;
    setStatus(result);

    if (result === 'error') {
      if (msg.includes('Introduce un valor')) {
        setMessage("Faltan datos.");
      } else if (msg.includes('dirección de correo electrónico no es válida')) {
        setMessage("Dirección de email no válida.");
      } else {
        setMessage(msg);
      }
      return;
    }

    if (result === 'success') {
      setMessage(msg.includes('Ya estás suscrito') ? '¡Ya estabas suscrito/a!' : "¡Gracias por suscribirte!");
    }
  };

  const handleSubscription = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      jsonp(`${signupUrl}&EMAIL=${encodeURIComponent(email)}`, { param: 'c' }, (_, data) => {
        answerSubscription(data);
      });
    } catch {
      setStatus('error');
      setMessage("Error de conexión.");
    }
  };

  return (
    <section id="newsletter">
      <h2 className="allCaps whiteTextShadow" id="separatorTitle">Suscripción a Newsletter</h2>
      <form onSubmit={handleSubscription}>
        <div id="mc-inputs">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            placeholder="Tu nombre"
            autoComplete="name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
          />
        </div>
        <button
          className="allCaps"
          type="submit"
          disabled={submitDisabilityCondition}
        >
          Suscribirme
        </button>
        <span>
          {status === "sending" && <div className="mc-sending">Enviando...</div>}
          {status === "error" && <div className="mc-error">ERROR: {message}</div>}
          {status === "success" && <div className="mc-success">{message}</div>}
        </span>
      </form>

      {status === "success" && message === "¡Gracias por suscribirte!" && (
        <MUI_Dialog titleText={message} openNow={true} clearMCForm={clearFields} />
      )}
    </section>
  );
}
