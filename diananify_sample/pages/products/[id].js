import { useRouter } from "next/router";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from "next/image";

const products = [
  { id: 1, name: "Product A", price: 29.99, image: "/images/diananify-02.jpg", description: "A stylish and comfortable sweater for any occasion." },
  { id: 2, name: "Product B", price: 49.99, image: "/images/diananify-03.jpg", description: "A premium quality sweater with a modern design." },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <h1 className="text-center mt-5">Product Not Found</h1>;

  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        {/* Product Image */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} width={500} height={500} className="img-fluid" />
        </Col>
        
        {/* Product Info */}
        <Col md={6}>
          <h1>{product.name}</h1>
          <p className="lead">${product.price}</p>
          <p>{product.description}</p>
          <Button variant="dark" className="mt-3">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}
