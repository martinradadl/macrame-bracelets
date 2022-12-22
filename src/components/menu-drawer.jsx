import React from "react";
import { Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { colors } from "../styles/global";
import { useDrawer } from "../hooks/useDrawer";

export const MenuDrawer = () => {
  const { showDrawer, onClose, open } = useDrawer();
  return (
    <React.Fragment>
      <Button id="menu-icon" type="primary" onClick={showDrawer}>
        <AiOutlineMenu color={colors.white} size="24px" />
      </Button>
      <Drawer
        className="menu-drawer"
        title="Menú"
        width="200px"
        placement="left"
        onClose={onClose}
        open={open}
        bodyStyle={{
          background: colors.black,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        headerStyle={{ background: colors.gray }}
      >
        <Link to="/in-stock" onClick={onClose}>
          EN STOCK
        </Link>
        <Link to="/select-knot" onClick={onClose}>
          PERSONALIZADAS
        </Link>
        <Link to="/gallery" onClick={onClose}>
          GALERÍA
        </Link>
      </Drawer>
    </React.Fragment>
  );
};
