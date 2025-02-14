import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "../components/HeroSection";

export default function Home() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 29.99, image: "/images/diananify-02.jpg" },
    { id: 2, name: "Product B", price: 49.99, image: "/images/diananify-03.jpg" }
  ]);

  return (
    <Container>
        <HeroSection></HeroSection>
      <h1 className="text-center my-4">Shop the Latest Styles</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              {/* ✅ Correct way to use Link (NO <a> inside) */}
              <Link href={`/products/${product.id}`} className="text-decoration-none">
                <Image src={product.image} alt={product.name} width={300} height={300} className="card-img-top"/>
              </Link>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Link href={`/products/${product.id}`} className="btn btn-dark">View Product</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
