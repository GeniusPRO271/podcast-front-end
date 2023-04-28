import React from 'react';
import './sponsosrs.css';
import Qet from '../programas_sponsors/QET/QET';
import Ñoñoinos from '../programas_sponsors/Ñoñoinos/ñoñoinos';
import Ecldp from '../programas_sponsors/ECDLP/Ecldp';
import Esdh from '../programas_sponsors/ESDH/Esdh';
import Ebyb from '../programas_sponsors/EBYB/ebyb';
function Sponsosrs({ programas }) {
  let qet;
  let ecdlp;
  let esdh;
  let ebyb;
  let ñoño;

  programas.map((d) => {
    d.title == 'Que Entren Todxs' && (qet = d),
      d.title == 'El Club de los Precisos' && (ecdlp = d),
      d.title == 'El sentido del humor' && (esdh = d),
      d.title == 'Entre Broma y Broma' && (ebyb = d),
      d.title == 'Ñoñoinos' && (ñoño = d);
  });
  return (
    <div className="sponsors_container">
      <Qet programa={qet} />
      <div className="sponsors_container_2">
        <div className="  left_column">
          <Ñoñoinos programa={ñoño} />
          <Ecldp programa={ecdlp} />
        </div>
        <div className=" right_column">
          <Esdh programa={esdh} />
        </div>
      </div>
      <Ebyb programa={ebyb} />
    </div>
  );
}

export default Sponsosrs;
