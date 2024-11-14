"use client"
import { api } from '@/convex/_generated/api'
import { userUpgradePlan } from '@/convex/user'
import { useUser } from '@clerk/nextjs'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useMutation } from 'convex/react'
import React from 'react'

function UpgradePlans() {
  const upgradeUserPlans=useMutation(api.user.userUpgradePlan)
  const {user}=useUser
  const onPaymentSucess = async() => {
    const result =await userUpgradePlan({userEmail:user?.primaryEmailAddress?.emailAddress})
    console.log(result);
    toast('Plan upgraded successfully')
    
  }
  return (
    <div className="px-4 py-8 md:px-6 lg:px-8">
      <h2 className="font-medium text-2xl md:text-3xl flex items-center justify-center mb-4">Plans</h2>
      <p className="text-base md:text-lg flex items-center justify-center text-center">
        Update your plan to upload multiple PDFs to take notes
      </p>
      <div className="mx-auto max-w-3xl py-6 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          
          {/* Pro Plan */}
          <div className="rounded-2xl border border-indigo-600 p-6 md:p-8 lg:p-10 shadow-sm ring-1 ring-indigo-600 flex flex-col justify-between">
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-medium text-gray-900">Pro<span className="sr-only">Plan</span></h2>
              <p className="mt-2 md:mt-4">
                <strong className="text-2xl md:text-3xl font-bold text-gray-900">$9.99</strong>
                <span className="text-sm font-medium text-gray-700"> / LifeTime</span>
              </p>
            </div>
  
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-700" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Unlimited PDF Upload
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-700" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Unlimited Note Taking
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-700" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Email Support
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-700" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Help Center Access
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-700" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Phone Support
              </li>
            </ul>
  
            <div className="flex justify-center mt-5 w-full md:w-auto">
              <PayPalButtons
                onApprove={() => onPaymentSucess()}
                onCancel={() => console.log('Payment Canceled')}
                createOrder={(data, actions) => {
                  return actions?.order?.create({
                    purchase_units: [
                      {
                        amount: { value: '9.99', currency_code: 'USD' }
                      }
                    ]
                  });
                }}
              />
            </div>
          </div>
  
          {/* Starter Plan */}
          <div className="rounded-2xl border border-gray-200 p-6 md:p-8 lg:p-10 shadow-sm flex flex-col justify-between">
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-medium text-gray-900">Starter<span className="sr-only">Plan</span></h2>
              <p className="mt-2 md:mt-4">
                <strong className="text-2xl md:text-3xl font-bold text-gray-900">$0</strong>
                <span className="text-sm font-medium text-gray-700"> / month</span>
              </p>
            </div>
  
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-700" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                5 PDF Uploads
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-700" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Unlimited Note Taking
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-700" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Email Support
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-700" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Help Center Access
              </li>
            </ul>
  
            <a
              href="#"
              className="mt-6 block rounded-full border border-indigo-600 bg-white px-8 py-2 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none"
            >
              Current Plan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default UpgradePlans
