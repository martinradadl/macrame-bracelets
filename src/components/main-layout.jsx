import React from "react";
import { Header } from "./header";

export const MainLayout = (props) => {
    const {children} = props
    return (<div>
    <Header></Header>
    {children}
    </div>)
}

