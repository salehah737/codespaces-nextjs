'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAnalytics } from '../../context/AnalyticsContext';
import ScrollReveal from '../../components/ScrollReveal';
import CTAButton from '../../components/CTAButton';
import Link from 'next/link';

export default function DiscordCommunityPage() {
  const { language } = useLanguage();
  const { track } = useAnalytics();
  const [onlineMembers, setOnlineMembers] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);
  const [loading, setLoading] = useState(true);
  
  // Discord server details
  const discordInviteLink = "https://discord.gg/matmoto-pomenpro";
  const discordServerId = "matmoto-pomenpro";
  
  // Simulate fetching Discord stats
  useEffect(() => {
    const fetchDiscordStats = async () => {
      try {
        // In a real implementation, this would fetch from Discord API
        // For now, we'll simulate with random numbers
        setLoading(true);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Generate random numbers for demonstration
        const randomOnline = Math.floor(Math.random() * 50) + 20;
        const randomTotal = randomOnline + Math.floor(Math.random() * 200) + 100;
        
        setOnlineMembers(randomOnline);
        setTotalMembers(randomTotal);
        setLoading(false);
        
        track('discord_stats_loaded');
      } catch (error) {
        console.error('Error fetching Discord stats:', error);
        setLoading(false);
      }
    };
    
    fetchDiscordStats();
  }, [track]);
  
  // Track Discord join clicks
  const handleJoinClick = () => {
    track('discord_join_clicked');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-3xl font-bold text-center mb-2">
            {language === 'ms' ? 'Komuniti Discord MatMoto-PomenPro' : 'MatMoto-PomenPro Discord Community'}
          </h1>
          <p className="text-gray-600 text-center mb-8">
            {language === 'ms' 
              ? 'Sertai komuniti kami untuk perbincangan, sokongan, dan perkongsian tentang alat ganti kenderaan Malaysia' 
              : 'Join our community for discussions, support, and sharing about Malaysian vehicle parts'}
          </p>
        </ScrollReveal>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-indigo-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="w-8 h-8">
                      <path fill="#5865f2" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">MatMoto-PomenPro</h2>
                    <p className="text-indigo-200">
                      {language === 'ms' ? 'Pelayan Discord Rasmi' : 'Official Discord Server'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  {loading ? (
                    <div className="animate-pulse">
                      <div className="h-4 w-20 bg-indigo-300 rounded mb-2"></div>
                      <div className="h-4 w-24 bg-indigo-300 rounded"></div>
                    </div>
                  ) : (
                    <>
                      <p className="font-medium">{onlineMembers} {language === 'ms' ? 'dalam talian' : 'online'}</p>
                      <p className="text-indigo-200">{totalMembers} {language === 'ms' ? 'ahli' : 'members'}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    {language === 'ms' ? 'Saluran Perbincangan' : 'Discussion Channels'}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">#</span>
                      {language === 'ms' ? 'umum' : 'general'}
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">#</span>
                      {language === 'ms' ? 'alat-ganti' : 'parts-discussion'}
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">#</span>
                      {language === 'ms' ? 'sokongan-teknikal' : 'tech-support'}
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">#</span>
                      {language === 'ms' ? 'perkongsian-gambar' : 'image-sharing'}
                    </li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                    </svg>
                    {language === 'ms' ? 'Peranan Komuniti' : 'Community Roles'}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                      {language === 'ms' ? 'Pentadbir' : 'Administrators'}
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                      {language === 'ms' ? 'Moderator' : 'Moderators'}
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                      {language === 'ms' ? 'Pakar Teknikal' : 'Technical Experts'}
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                      {language === 'ms' ? 'Ahli Komuniti' : 'Community Members'}
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href={discordInviteLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleJoinClick}
                >
                  <CTAButton
                    text={language === 'ms' ? 'Sertai Discord Kami' : 'Join Our Discord'}
                    variant="gradient"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    }
                  />
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {language === 'ms' ? 'Soalan Lazim' : 'Frequently Asked Questions'}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-indigo-600">
                    {language === 'ms' ? 'Bagaimana saya boleh menyertai?' : 'How can I join?'}
                  </h4>
                  <p className="text-gray-600 mt-1">
                    {language === 'ms' 
                      ? 'Klik butang "Sertai Discord Kami" di atas dan ikuti arahan untuk menyertai pelayan.' 
                      : 'Click the "Join Our Discord" button above and follow the instructions to join the server.'}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-indigo-600">
                    {language === 'ms' ? 'Adakah saya perlu membuat akaun?' : 'Do I need to create an account?'}
                  </h4>
                  <p className="text-gray-600 mt-1">
                    {language === 'ms' 
                      ? 'Ya, anda memerlukan akaun Discord untuk menyertai. Ia percuma dan mudah untuk didaftar.' 
                      : 'Yes, you need a Discord account to join. It\'s free and easy to sign up.'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {language === 'ms' ? 'Peraturan Komuniti' : 'Community Rules'}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 font-medium mr-2">1.</span>
                  {language === 'ms' ? 'Hormati semua ahli komuniti' : 'Respect all community members'}
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 font-medium mr-2">2.</span>
                  {language === 'ms' ? 'Tiada spam atau iklan yang tidak berkaitan' : 'No spam or unrelated advertisements'}
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 font-medium mr-2">3.</span>
                  {language === 'ms' ? 'Gunakan saluran yang betul untuk perbincangan' : 'Use the correct channels for discussions'}
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 font-medium mr-2">4.</span>
                  {language === 'ms' ? 'Ikut arahan moderator' : 'Follow moderator instructions'}
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">
              {language === 'ms' ? 'Acara Akan Datang' : 'Upcoming Events'}
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-md p-4 border border-indigo-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-indigo-600">
                      {language === 'ms' ? 'Sesi Soal Jawab Bersama Pakar' : 'Q&A Session with Experts'}
                    </h4>
                    <p className="text-gray-600 mt-1">
                      {language === 'ms' 
                        ? 'Tanya soalan tentang alat ganti dan penyelenggaraan kenderaan Malaysia.' 
                        : 'Ask questions about Malaysian vehicle parts and maintenance.'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {language === 'ms' ? '20 Mei 2025' : 'May 20, 2025'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-md p-4 border border-indigo-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-indigo-600">
                      {language === 'ms' ? 'Bengkel Dalam Talian: Mengenal Pasti Alat Ganti' : 'Online Workshop: Identifying Parts'}
                    </h4>
                    <p className="text-gray-600 mt-1">
                      {language === 'ms' 
                        ? 'Belajar cara mengenal pasti alat ganti asli dan tiruan.' 
                        : 'Learn how to identify genuine vs counterfeit parts.'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {language === 'ms' ? '5 Jun 2025' : 'June 5, 2025'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}