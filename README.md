Diananify

📌 Project Overview

Diananify is a full-stack e-commerce platform designed to provide a seamless shopping experience. Built using React, Node.js, Express.js, and MongoDB, it features user authentication, product management, a shopping cart, and secure payment processing.

🚀 Features

🛍️ User Authentication – Secure login and registration using JWT & OAuth.

📦 Product Management – Browse, search, and filter products.

🛒 Shopping Cart & Checkout – Add items to cart and complete purchases with Stripe integration.

🔍 Search & Filtering – Users can search products by name, category, and price range.

📈 Order History – Track past purchases.

🔒 Secure API – Built with RESTful principles, ensuring data integrity.

📱 Responsive UI – Fully optimized for mobile and desktop.

🛠️ Tech Stack

Frontend:

React.js

Redux (for state management)

Tailwind CSS (for styling)

Backend:

Node.js

Express.js

MongoDB (Database)

Mongoose (ODM for MongoDB)

JWT Authentication

Stripe API (for payment processing)

🚀 Getting Started

Prerequisites

Ensure you have the following installed:

Node.js (v16+ recommended)

MongoDB (local instance or cloud service like MongoDB Atlas)

Git

Installation

Clone the repository:

git clone https://github.com/dianavlw/diananify.git
cd diananify

Install dependencies:

npm install

Configure environment variables:

Create a .env file in the root directory.
Start the development server:

npm run dev

📂 Folder Structure

├── backend
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   ├── controllers/  # Business logic
│   ├── config/       # Configurations
│   ├── middleware/   # Authentication & security
│   ├── server.js     # Main backend server file
│
├── frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page views
│   │   ├── store/       # Redux store
│   │   ├── App.js       # Main React App
│   │   ├── index.js     # Entry point
│
├── .env               # Environment variables
├── package.json       # Project metadata
├── README.md          # Project documentation

✅ Future Enhancements

🚚 Order Tracking System – Live tracking of shipped orders.

🔔 Real-time Notifications – Alerts for orders, discounts, and promotions.

📝 Admin Dashboard – Manage users, orders, and inventory.

🌍 Multi-language Support – Expand accessibility for global users.

🤝 Contributing

Contributions are welcome! To contribute:

Fork the repo.

Create a new branch:

git checkout -b feature-new-feature

Commit changes:

git commit -m "Added new feature"

Push and submit a PR:

git push origin feature-new-feature

📄 License

This project is licensed under the MIT License.

📬 Contact: dianavlw@gmail.com

For questions or collaboration, reach out via:

GitHub: @dianavlw

Email: your-email@example.com

