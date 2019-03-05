import React from 'react';
import H2Element from '../styled/H2Element';
import H3Element from '../styled/H3Element';
import ParamElement from '../styled/ParamElement';

const Experience = props => (
  <div className="Experience">
    <H2Element name="Experience" />
    {props.data.map((exp, index) => (
      <div className='item' key={`Experience-${index}`}>
        <H3Element>{exp.jobTitle} @ {exp.company} <span>{exp.startDate} - {exp.endDate}</span></H3Element>
        <ParamElement content={exp.jobDescription} />
      </div>
    ))}
  </div>
);

export default Experience;


