import React from 'react';
import './contacto.css';
import '../../wall.css';
const Contacto = ({ activeWall }) => {
  return (
    <div
      className={`contacto_container  ${
        activeWall == 'contacto' ? 'show' : 'hidden'
      }`}
      style={{ padding: activeWall == 'contacto' ? 20 : 0 }}
    >
      <div className="contacto_title">CONTACTANOS</div>
      <div className="contact_info_continer">
        <i class="fa-solid fa-envelope fa-xl"></i> contacto@esdh.cl
      </div>
      <form className="form_container">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Enter your message"
              name="message"
            ></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
