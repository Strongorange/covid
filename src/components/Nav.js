/* eslint-disable */
import React, { useState, useEffect } from "react";

const Nav = (props) => {
  const getOptionValue = (event) => {
    const value = event.target.value;
    props.getOptionValue(value);
  };

  return (
    <div className="navigation">
      <h1 className="navigation__title">COVID-19</h1>
      <select className="navigation__select" onChange={getOptionValue}>
        <option value="KR">한국</option>
        <option value="US">미국</option>
      </select>
    </div>
  );
};

export default Nav;
