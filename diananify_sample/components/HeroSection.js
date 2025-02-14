import Image from "next/image";
import { Container, Button } from "react-bootstrap";

export default function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center text-center text-md-start">
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        
        {/* Left Side: Text */}
        <div className="hero-text">
          <p className="small-text">LET'S SHOP</p>
          <h1 className="display-4 fw-bold">Best Sellers</h1>
          <p className="hero-subtext">Discover the most popular styles this season.</p>
          <Button variant="outline-dark" className="mt-3 px-4 py-2">Shop Now</Button>
        </div>

        {/* Right Side: Image */}
        <div className="hero-image">
          <Image 
            src="/images/diananify-01.jpg"  // Replace with your desired image
            alt="Bestseller Product"
            width={500}
            height={600}
            className="img-fluid"
            priority
          />
        </div>

      </Container>
    </section>
  );
}
