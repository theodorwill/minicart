import { Button, Card } from "react-bootstrap"
import { useCartContext } from "../context/CartContext"

type ProductProp = {
    id: number,
    name: string,
    price: string,
    image_link: string,
    description: string
}

export function Product({ id, name, price, image_link, description }: ProductProp) {

   const {increaseItemQuantity} = useCartContext()

    return <Card className="bg-white text-left">
        <Card.Img variant="top" src={image_link} height="200px" style={{ objectFit: "contain" }} />
        <Card.Body className="d-flex flex-column">
            <Card.Header className="bg-white mb-4" style={{ height: "3rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                <span className="fs-5">{name}</span>
            </Card.Header>
            <Card.Text className="mb-4" style={{ height: "100px",padding:"0 16px", overflowY: "auto" }}>
                {description}
            </Card.Text>
            <Card.Footer className="bg-white d-flex justify-content-between align-items-baseline" style={{padding:"20px 16px 8px 16px"}}>
                <Button onClick={() => increaseItemQuantity(id)}>+ Add To Cart</Button>
                <span className="ms-2 text-muted">{price}$</span>
            </Card.Footer>
        </Card.Body>
    </Card>
}