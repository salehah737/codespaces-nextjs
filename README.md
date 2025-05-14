# MatMoto-PomenPro

## AI-Powered Mechanics & Vehicle Parts Marketplace

MatMoto-PomenPro is a Next.js application that connects motorists with nearby mechanics using AI-driven matching and provides a peer-to-peer marketplace for buying and selling vehicles and parts.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fmatmoto-pomenpro)

## Features

### Mechanic Finder
- Geo-location search to find nearby mechanics
- AI-powered matching based on vehicle issues
- Real-time booking system
- Emergency roadside assistance
- Interactive map view

### Marketplace
- Buy and sell vehicles and parts
- AI price suggestions
- Search and filter functionality
- Fraud prevention

### AI Utilities
- Vehicle diagnostics
- Parts compatibility checker
- Maintenance reminders
- Voice search capability
- AI Assistant chatbot

## Tech Stack

- **Frontend**: Next.js 14 (App Router), Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (via Prisma)
- **AI/ML**: OpenAI API integration
- **Maps**: Mapbox for location services
- **Auth**: NextAuth.js
- **Payments**: Stripe
- **Real-time**: Pusher
- **PWA**: next-pwa for Progressive Web App support
- **Analytics**: Custom analytics implementation

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/matmoto-pomenpro.git
   cd matmoto-pomenpro
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file in the root directory and add the necessary environment variables (see `.env.local.example`).

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This project is set up for continuous deployment with GitHub Actions to Vercel. Simply push to the main branch, and the workflow will automatically deploy your changes.

### Environment Variables

Make sure to set the following secrets in your GitHub repository:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_MAPBOX_TOKEN`
- `NEXT_PUBLIC_PUSHER_APP_ID`
- `NEXT_PUBLIC_PUSHER_KEY`
- `NEXT_PUBLIC_PUSHER_CLUSTER`

## Multilingual Support

The application supports both English and Bahasa Melayu, with Bahasa Melayu set as the default language for Malaysian users.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All open-source libraries used in this project