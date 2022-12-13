import { DropdownButton, Card } from "react-bootstrap"
import { useCartContext } from "../context/CartContext"
import { CartItem } from "./CartItem"
import items from "../data/data.json"

export function Cart() {

    const { cartItems } = useCartContext()

    /* function nrFormatter(totalSum: number) {
        let formattedValue = (Math.round(totalSum * 100) / 100).toFixed(2)
        return formattedValue
    } */

    return (
        <DropdownButton variant="secondary" align="end" title="Cart" style={{ position: "relative" }}>
            {cartItems.map(item => (
                // <Dropdown.Item key={item.id} href="#/action-1" style={{ height: "auto", width: "500px" }}>
                <CartItem key={item.id} {...item} />
                //</Dropdown.Item>
            ))}
            <Card.Footer className="bg-white d-flex flex-row justify-content-start align-items-center" style={{ padding: "1rem 3rem" }}>
                <Card.Title>
                    Total:
                    {" $" +
                        cartItems.reduce((total, cartItem) => {
                            const item = items.find(i => i.id === cartItem.id)
                            let stringToNum: number = +(item?.price || 0)
                            let totalSum: number = total + stringToNum * cartItem.quantity
                            return totalSum
                        }, 0)
                    }
                </Card.Title>
            </Card.Footer>
        </DropdownButton>
    )
}