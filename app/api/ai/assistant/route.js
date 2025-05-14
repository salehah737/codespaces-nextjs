import { NextResponse } from 'next/server';
import { translations } from '../../../lib/translations';

export async function POST(request) {
  try {
    const { query, language = 'en' } = await request.json();
    
    // In a real app, this would call an AI service API like OpenAI
    // This is a mock implementation for demonstration
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get translations for the selected language
    const t = translations[language] || translations.en;
    
    // Simple keyword-based responses
    const lowerQuery = query.toLowerCase();
    let response = {};
    
    if (lowerQuery.includes('brake') || lowerQuery.includes('brek')) {
      response = {
        message: language === 'ms' ? 
          'Masalah brek biasanya disebabkan oleh pad brek yang haus atau minyak brek yang rendah. Saya cadangkan anda memeriksa pad brek dan tahap minyak brek anda.' : 
          'Brake issues are typically caused by worn brake pads or low brake fluid. I recommend checking your brake pads and brake fluid level.',
        suggestion: {
          type: 'mechanic',
          specialty: 'brake'
        }
      };
    } else if (lowerQuery.includes('oil') || lowerQuery.includes('minyak')) {
      response = {
        message: language === 'ms' ? 
          'Menukar minyak enjin secara berkala adalah penting untuk kesihatan enjin. Untuk kebanyakan kenderaan, ia disyorkan setiap 5,000-10,000 km.' : 
          'Regular oil changes are essential for engine health. For most vehicles, it\'s recommended every 5,000-10,000 km.',
        suggestion: {
          type: 'maintenance',
          service: 'oil change'
        }
      };
    } else if (lowerQuery.includes('tire') || lowerQuery.includes('tayar')) {
      response = {
        message: language === 'ms' ? 
          'Tekanan tayar yang betul meningkatkan keselamatan dan jimat bahan api. Periksa tekanan tayar anda sekurang-kurangnya sebulan sekali.' : 
          'Proper tire pressure improves safety and fuel economy. Check your tire pressure at least once a month.',
        suggestion: {
          type: 'maintenance',
          service: 'tire check'
        }
      };
    } else if (lowerQuery.includes('battery') || lowerQuery.includes('bateri')) {
      response = {
        message: language === 'ms' ? 
          'Bateri kereta biasanya bertahan 3-5 tahun. Jika anda mengalami masalah memulakan kenderaan, bateri anda mungkin perlu diganti.' : 
          'Car batteries typically last 3-5 years. If you\'re experiencing starting issues, your battery might need replacement.',
        suggestion: {
          type: 'part',
          item: 'battery'
        }
      };
    } else if (lowerQuery.includes('price') || lowerQuery.includes('harga')) {
      response = {
        message: language === 'ms' ? 
          'Harga alat ganti bergantung pada jenama, model, dan tahun kenderaan anda. Saya boleh membantu anda mendapatkan anggaran yang lebih tepat jika anda memberikan butiran tersebut.' : 
          'Parts pricing depends on your vehicle\'s make, model, and year. I can help you get a more accurate estimate if you provide those details.',
        suggestion: {
          type: 'price check'
        }
      };
    } else {
      response = {
        message: language === 'ms' ? 
          'Saya boleh membantu dengan soalan mengenai penyelenggaraan kenderaan, diagnosis masalah, atau mencari alat ganti. Sila tanya soalan yang lebih khusus.' : 
          'I can help with questions about vehicle maintenance, problem diagnosis, or finding parts. Please ask a more specific question.'
      };
    }
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('AI Assistant API error:', error);
    return NextResponse.json(
      { error: true, message: 'Internal server error' },
      { status: 500 }
    );
  }
}