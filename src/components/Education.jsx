import React from 'react';
import H2Element from '../styled/H2Element';
import H3Element from '../styled/H3Element';
import ParamElement from '../styled/ParamElement';

const Education = props => (
  <div className="Education">
    <H2Element name="Education" />
    {props.data.map((edu, index) => (
      <div className='Education-item' key={`Education-${index}`}>
        <H3Element>{edu.degree} @ {edu.institution} <span>{edu.startDate} - {edu.endDate}</span></H3Element>
        <ParamElement content={edu.description} />
      </div>
    ))}
  </div>
);

export default Education;