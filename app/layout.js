import '../global.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import AIAssistant from './components/AIAssistant';
import { AnalyticsProvider } from './context/AnalyticsContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MatMoto-PomenPro - AI-Powered Mechanics & Vehicle Parts Marketplace',
  description: 'Connect with nearby mechanics and buy/sell vehicle parts with AI-powered assistance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <AnalyticsProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <AIAssistant />
            <Footer />
          </AnalyticsProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}