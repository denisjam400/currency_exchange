import Api from "../../Scenes/User/API/Api";
import Body from "../../Scenes/User/Body/Body";
import Exchange from "../../Scenes/User/Live Exchange/Exchange";
import Recommended from "../../Scenes/User/Recommended/Recommended";
import David from "../../Scenes/User/David/David";
import Tools from "../../Scenes/User/Tools/Tools";
import Direction from "../../Scenes/User/WDirection/Direction";
import React from "react";

const C_Converter = () => {
  return (
    <div>
      <Body />
      <David />
      <Direction />
      <Exchange />
      <Api />
      <Tools />
      <Recommended />
    </div>
  );
};

export default C_Converter;
