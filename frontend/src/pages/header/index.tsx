import React from "react";
import { Link } from 'react-scroll'

import NormalHeader from "./NormalHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      <NormalHeader/>
      <MobileHeader/>
    </>
  )

}

export default Header;