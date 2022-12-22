import React from "react";
import { Button, Drawer } from "antd";
import { BraceletDetails } from "./bracelet-details";
import "../styles/cart.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineShopping as CartIcon } from "react-icons/ai";
import { colors } from "../styles/global";
import { useDrawer } from "../hooks/useDrawer";
import {useSelector} from "react-redux"
import { addItemToCart } from "../redux/actions";

export const CartDrawer = () => {
  const cart=useSelector((state)=>state.cart)
  const navigate = useNavigate();
  const { showDrawer, onClose, open } = useDrawer();
  console.log(cart)
  return (
    <div>
      <Button id="cart-icon" type="primary" onClick={showDrawer}>
        <CartIcon color={colors.white} size="30px" />
      </Button>
      <Drawer
        className="menu-drawer"
        title={
          <p style={{ color: colors.white, margin: 0 }}>Bolsa de compra</p>
        }
        width="300px"
        placement="right"
        onClose={onClose}
        open={open}
        closeIcon={<AiOutlineClose color={colors.white} />}
        bodyStyle={{
          background: colors.gray,
          display: "flex",
          flexDirection: "column",
          padding: 0,
        }}
        headerStyle={{ background: colors.black, color: colors.white }}
      >
        <div class="cart-container">
          {cart.map((elem,index)=> {
            return <BraceletDetails bracelet={elem} key={index}
             />
          })}
          <div>
            <Button
              value={"Completar orden"}
              onClick={() => {
                onClose()
                navigate("/complete-order");
              }}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
};



