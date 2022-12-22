import { bracelets } from "../data/example"
import { cartActionTypes } from "./actionTypes"

export const addItemToCart = (id) => {
    const itemFound = bracelets.find((elem) => {
        return elem.id === id
    })
    return {
        type: cartActionTypes.ADD_PRODUCT,
        payload: itemFound
    }
}