export default function handler(req, res) {
    res.status(200).json([
      {
        id: 1,
        name: "Product A",
        price: 29.99,
        image: "https://via.placeholder.com/300", // Replace with real image URLs
      },
      {
        id: 2,
        name: "Product B",
        price: 49.99,
        image: "https://via.placeholder.com/300",
      },
    ]);
  }
  