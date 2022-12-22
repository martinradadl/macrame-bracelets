import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "../components/main-layout"
import { Home } from "./home"
import { InStock } from "./in-stock"
import { Gallery } from "./gallery"
import { SelectKnot } from "./select-knot"
import { SelectedBracelet } from "./selected-bracelet"
import { SelectDetails } from "./select-details"
import { CompleteOrder } from "./complete-order"
import { ConfirmOrder } from "./confirm-order"
import { AddedToCart } from "./added-to-cart"

const MainRouter = () => {
    return <BrowserRouter>
        <MainLayout >
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/in-stock" element={<InStock />}></Route>
                <Route exact path="/select-knot" element={<SelectKnot />}></Route>
                <Route exact path="/gallery" element={<Gallery />}></Route>
                <Route exact path="/selected-bracelet/:id" element={<SelectedBracelet />}></Route>
                <Route exact path="/select-details" element={<SelectDetails />}></Route>
                <Route exact path="/complete-order" element={<CompleteOrder />}></Route>
                <Route exact path="/confirm-order" element={<ConfirmOrder />}></Route>
                <Route exact path="/added-to-cart" element={<AddedToCart />}></Route>
            </Routes>
        </MainLayout>
    </BrowserRouter>
}

export { MainRouter }