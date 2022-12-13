import { useCartContext } from "../context/CartContext"
import { Button, Card } from "react-bootstrap"
import items from "../data/data.json"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useCartContext()

    const item = items.find(i => i.id === id)
    if (item == null) return null

    let itemNr: number = +item.price;
    let priceNr: number = quantity * itemNr

    return (
        <div className="d-flex align-items-center" style={{ height: "auto", minWidth: "200px", maxWidth: "500px", width: "100%", padding: "1rem 3rem" }}>
            <Card.Img variant="left" src={item.image_link} height="100px" style={{ objectFit: "contain", paddingRight: "2rem" }} />

            <Card.Body className="d-flex flex-column" style={{ width: "auto", overflow: "hidden" }}>
                <div className="d-flex flex-row justify-content-between">
                <Card.Title className="bg-white mb-2" style={{ width: "80%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</Card.Title>
                <Button className="d-flex justify-content-center align-items-center" onClick={() => removeFromCart(item.id)} variant="danger" size="sm" style={{ borderWidth: "1.5px", width:"25px", height: "25px" }}>X</Button>
                </div>
                
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center" style={{ width: "90px" }}>
                        <Button className="d-flex justify-content-center align-items-center" onClick={() => decreaseItemQuantity(item.id)} variant="outline-dark " size="sm" style={{ borderWidth: "1.5px", width:"25px", height: "25px" }}>-</Button>
                        <span>{quantity}</span>
                        <Button className="d-flex justify-content-center align-items-center" onClick={() => increaseItemQuantity(item.id)} variant="outline-dark " size="sm" style={{ borderWidth: "1.5px", width:"25px", height: "25px" }}>+</Button>
                    </div>
                    <span>${(Math.round(priceNr * 100) / 100).toFixed(2)}</span>
                </div>
            </Card.Body>
        </div>
    )
}