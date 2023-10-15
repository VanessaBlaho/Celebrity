import React from 'react';

function Celebrity({ celebrity }) {
  const {
    image,
    name,
    profession,
    wealth,
    bio,
    age,
    source_of_wealth,
    residence,
    citizenship,
    education,
    marital_status,
    children,
  } = celebrity;

  return (
    <div className="celebrity-card">
      <img className="celebrity-image" src={image} alt={name} />
      <h2>{name}</h2>
      <p>Profession: {profession}</p>
      <p>Wealth: {wealth}</p>
      <p>Bio: {bio}</p>
      <p>Age: {age}</p>
      <p>Source of Wealth: {source_of_wealth}</p>
      <p>Residence: {residence}</p>
      <p>Citizenship: {citizenship}</p>
      <p>Education: {education}</p>
      <p>Marital Status: {marital_status || 'N/A'}</p>
      <p>Children: {children || 'N/A'}</p>
    </div>
  );
}

export default Celebrity;
