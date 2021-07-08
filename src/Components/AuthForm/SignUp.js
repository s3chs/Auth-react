import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AuthForm.css";

export default function SignUp() {
  const showModal = useSelector((state) => state);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({
      type: "CLOSEMODAL",
    });
  };

  return (
    <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
      <div onClick={closeModal} className="overlay"></div>

      <div className="container-modal">
        <form className="form-auth">
          <h2>INSCRIPTION</h2>
          <label htmlFor="mail"> Votre mail</label>
          <input type="email" id="mail" required />
          <label htmlFor="psw"> Votre mot de passe</label>
          <input type="password" id="psw" required />
          <label htmlFor="confirmpsw"> Confirmer le mot de passe</label>
          <input type="password" id="confirmpsw" required />

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
