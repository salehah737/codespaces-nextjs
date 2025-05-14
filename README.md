# MatMoto-PomenPro - Mechanics & Vehicle Parts Marketplace

A modern web application for connecting customers with mechanics and facilitating the purchase of vehicle parts and services.

## Features

- **User Authentication**
  - Modern login and registration system
  - Role-based access (Customer, Mechanic, Seller)
  - Social login options

- **Marketplace**
  - Browse and search for vehicle parts
  - Filter by category, make, model, etc.
  - Detailed product pages

- **Mechanic Services**
  - Find nearby mechanics
  - Book service appointments
  - View mechanic profiles and reviews

- **Shopping Cart**
  - Add/remove items
  - Update quantities
  - Persistent cart across sessions

- **Checkout & Payments**
  - Secure payment processing with Stripe
  - Order history and tracking
  - Multiple shipping addresses

## Tech Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/matmoto-pomenpro.git
   cd matmoto-pomenpro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your configuration values.

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

The application uses Prisma ORM with PostgreSQL. To set up your database:

1. Make sure PostgreSQL is installed and running
2. Update the `DATABASE_URL` in your `.env.local` file
3. Run migrations:
   ```bash
   npx prisma migrate dev
   ```
4. (Optional) Seed the database:
   ```bash
   npx prisma db seed
   ```

## Payment Processing

This project uses Stripe for payment processing. To test payments:

1. Set up a Stripe account and get your API keys
2. Add the keys to your `.env.local` file
3. Use Stripe's test card numbers for testing:
   - Card number: 4242 4242 4242 4242
   - Expiry: Any future date
   - CVC: Any 3 digits

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.