import { Col, Row } from "react-bootstrap"
import { Product } from "../components/Product"

//API data - kan ersättas med API-call
import items from "../data/data.json"

export function Home() {
    return (
        <>
            <h1>Products</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {items.map(item => (
                    <Col key={item.id}><Product {...item}/></Col>
                ))}
            </Row>
        </>
    )
}