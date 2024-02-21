import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavBar, ConfigProvider } from "@nutui/nutui-react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Edit } from "@nutui/icons-react";

function Title() {
  const Navigate = useNavigate();
  const NavBarTheme = {
    nutuiNavbarBoxShadow: "0px 2px 8px rgb(184 184 184)",
  };
  const { user } = useContext(AuthContext);
  const [isBack, setIsBack] = useState(false);
  let local = useLocation();
  useEffect(() => {
    local.pathname === "/" ? setIsBack(false) : setIsBack(true);
  }, [local]);
  const onBackClickhandle = () => {
    window.history.back();
  };

  const handleEditClick = () => {
    !user ? Navigate("/login") : Navigate(`/editPost`);
  };
  return (
    <>
      <ConfigProvider theme={NavBarTheme}>
        <NavBar
          onBackClick={onBackClickhandle}
          back={isBack ? <ArrowLeft /> : null}
          right={!isBack ? <Edit onClick={handleEditClick} /> : null}
          fixed={true}>
          Posting donation
        </NavBar>
      </ConfigProvider>
    </>
  );
}
export default Title;
