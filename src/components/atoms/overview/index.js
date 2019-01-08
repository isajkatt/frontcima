import React from 'react';

const Overview = (props) => {
  const text = props.text.substring(0,217)+"...";
  return <p className="overview">{text}</p>
}

export default Overview;