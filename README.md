<<<<<<< HEAD
# MatMoto-PomenPro - Mechanics & Vehicle Parts Marketplace

A modern web application for connecting customers with mechanics and facilitating the purchase of vehicle parts and services.

## Latest Features (May 2025)

- Modern CTA components with haptic feedback and visual effects
- Animated hero section with gradient text and floating elements
- Scroll reveal animations for enhanced user experience
- Interactive feature cards with hover effects
- Multilingual UI components in English and Bahasa Melayu
- Camera scanner for identifying parts from Malaysian vehicle manuals
- Enhanced mechanic and seller registration process
- Support for Malaysian vehicle brands and parts
- Brand-specific scanners for Malaysian vehicles:
  - Yamaha parts scanner with data from yamaha-motor.com.my
  - Honda parts scanner with data from honda.com.my
  - Proton parts scanner with data from proton.com
  - Perodua parts scanner with data from perodua.com.my
- API endpoints for integration with other systems:
  - Parts search API with filtering by brand, model, and category
  - Models API for retrieving vehicle model information
  - Brands API for accessing supported vehicle brands
  - API documentation endpoint
- Community features:
  - Discord integration for real-time discussions and support
  - Community forums for in-depth discussions
  - Social media integration

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

- **Parts Scanner**
  - Scan vehicle parts using your camera
  - Identify parts from Malaysian vehicle brands
  - Get detailed information and compatibility

- **Community**
  - Discord server for real-time support
  - Forums for discussions and knowledge sharing
  - Social media integration

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
   git clone https://github.com/salehah737/MatMoto-PomenPro.git
   cd MatMoto-PomenPro
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

Contributions are welcome! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
=======
# GitHub Codespaces ♥️ Next.js

Welcome to your shiny new Codespace running Next.js! We've got everything fired up and running for you to explore Next.js.

You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with the what you're seeing right now - where you go from here is up to you!

Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you’re ready you can click "Publish Branch" and we’ll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.

To run this application:

```
npm run dev
```
>>>>>>> main
