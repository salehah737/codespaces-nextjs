'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAnalytics } from '../context/AnalyticsContext';
import CTAButton from '../components/CTAButton';

export default function UpgradePage() {
  const router = useRouter();
  const { track } = useAnalytics();
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    track('upgrade_plan_selected', { plan });
  };

  const handleUpgrade = (planType) => {
    track('upgrade_initiated', { plan: planType });
    router.push(`/checkout?plan=${planType}`);
  };

  const plans = {
    basic: {
      name: 'Basic',
      price: selectedPlan === 'monthly' ? 'RM29' : 'RM290',
      period: selectedPlan === 'monthly' ? '/month' : '/year',
      features: [
        'Access to mechanic directory',
        'Basic diagnostics',
        'Community support',
      ],
      cta: 'Upgrade to Basic',
      type: 'basic'
    },
    pro: {
      name: 'Professional',
      price: selectedPlan === 'monthly' ? 'RM79' : 'RM790',
      period: selectedPlan === 'monthly' ? '/month' : '/year',
      features: [
        'All Basic features',
        'Advanced AI diagnostics',
        'Priority mechanic booking',
        'Discounted parts',
        'Email support'
      ],
      cta: 'Upgrade to Pro',
      type: 'pro',
      popular: true
    },
    business: {
      name: 'Business',
      price: selectedPlan === 'monthly' ? 'RM199' : 'RM1,990',
      period: selectedPlan === 'monthly' ? '/month' : '/year',
      features: [
        'All Professional features',
        'Multiple vehicle profiles',
        'Fleet management',
        'API access',
        'Dedicated account manager',
        '24/7 priority support'
      ],
      cta: 'Upgrade to Business',
      type: 'business'
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Upgrade Your Experience</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the plan that best fits your needs and take your vehicle maintenance to the next level.
        </p>
        
        <div className="mt-8 flex justify-center">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              className={`px-4 py-2 rounded-md ${
                selectedPlan === 'monthly' ? 'bg-white shadow-sm' : 'text-gray-500'
              }`}
              onClick={() => handlePlanSelect('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedPlan === 'yearly' ? 'bg-white shadow-sm' : 'text-gray-500'
              }`}
              onClick={() => handlePlanSelect('yearly')}
            >
              Yearly <span className="text-green-500 text-xs font-medium">Save 20%</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.values(plans).map((plan) => (
          <div 
            key={plan.type} 
            className={`
              rounded-lg overflow-hidden border transition-all
              ${plan.popular ? 'border-primary-500 shadow-lg transform md:-translate-y-4' : 'border-gray-200'}
            `}
          >
            {plan.popular && (
              <div className="bg-primary-500 text-white text-center py-2 font-medium">
                Most Popular
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="ml-1 text-xl text-gray-500">{plan.period}</span>
              </div>
              
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <CTAButton
                  text={plan.cta}
                  variant={plan.popular ? 'gradient' : 'primary'}
                  size="lg"
                  onClick={() => handleUpgrade(plan.type)}
                  trackingId={`upgrade_${plan.type}_button`}
                  pulseEffect={plan.popular}
                  withHaptics={true}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
        <p className="text-gray-600 mb-6">
          Contact our sales team for a tailored plan that meets your specific requirements.
        </p>
        <CTAButton
          text="Contact Sales"
          href="/contact"
          variant="secondary"
          size="md"
          trackingId="upgrade_contact_sales"
        />
      </div>
    </div>
  );
}