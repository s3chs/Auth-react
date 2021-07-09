import React, { useState, useRef, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AuthForm.css";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [error, setError] = useState("");
  const history = useHistory();
  const { signup } = useContext(AuthContext);

  const showModal = useSelector((state) => state);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({
      type: "CLOSEMODAL",
    });
  };

  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (inputs.current[1].value !== inputs.current[2].value) {
      setError("Les mots de passe ne sont pas identiques");
      return;
    }

    await signup(inputs.current[0].value, inputs.current[1].value);
    // history.push("/loggedHome");
    dispatch({
      type: "CLOSEMODAL",
    });
    inputs.current.forEach((inp) => {
      inp.value = "";
    });
    setError("");
  }

  return (
    <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
      <div onClick={closeModal} className="overlay"></div>

      <div className="container-modal">
        <form onSubmit={handleSubmit} className="form-auth">
          <h2>INSCRIPTION</h2>
          <label htmlFor="mail"> Votre mail</label>
          <input type="email" ref={addInputs} id="mail" required />
          <label htmlFor="psw"> Votre mot de passe</label>
          <input type="password" ref={addInputs} id="psw" required />
          <label htmlFor="confirmpsw"> Confirmer le mot de passe</label>
          <input type="password" ref={addInputs} id="confirmpsw" required />
          {error}

          <button className="btn-sign">S'inscrire</button>
        </form>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>
        <p className="bottom-help-txt">Besoin de créer un compte ? </p>
      </div>
    </div>
  );
}
