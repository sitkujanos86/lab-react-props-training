import React from 'react'
function IdCard (props) {
  return (
    <div className="id-card">
          <div>
        <p>Last Name:</p>
        <p>First Name:</p>
        <p>Gender:</p>
        <p>Height:</p>
        <p>Birth:</p>
      </div>
      <img src={props.picture} alt="Profile" />
    </div>
  );
};

export default IdCard;