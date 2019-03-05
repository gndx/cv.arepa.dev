import React from 'react';
import H2Element from '../styled/H2Element';
import H3Element from '../styled/H3Element';
import ParamElement from '../styled/ParamElement';

const Certificates = props => (
  <div className="Certificates">
    <H2Element name="Certificates" />
    {props.data.map((cert, index) => (
      <div className='Certificates-item' key={`Certificates-${index}`}>
        <H3Element>{cert.name} @ {cert.institution} <span>{cert.date}</span></H3Element>
        <ParamElement content={cert.description} />
      </div>
    ))}
  </div>
);

export default Certificates;