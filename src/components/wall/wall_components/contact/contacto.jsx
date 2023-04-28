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
        <i className="fa-solid fa-envelope fa-xl"></i> contacto@esdh.cl
      </div>
      <form className="form_container">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Enter your message"
              name="message"
            ></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
