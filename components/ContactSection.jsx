import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SectionHeading from '@/src/utils/SectionHeading';
import Map from './Map';


// Define the validation schema using Yup
const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Must be a valid email').required('Email is required'),
  mobile: yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be at least 10 digits').required('Mobile Number is required'),
  message: yup.string().required('Message is required'),
});

const ContactSection = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get In Touch" className="items-center" />
        
        <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-xl overflow-hidden mt-12">
          
          {/* Left Side: Contact Info */}
          <div className="md:w-1/3 bg-gray-700 text-white p-8">
            <h3 className="text-3xl font-playfair mb-6">Contact Info</h3>
            <p className="font-roboto mb-8">We're here to help! Reach out to us for any inquiries or booking requests.</p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                {/* Location Icon */}
                <svg className="w-6 h-6 text-brand-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <p className="font-roboto">Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
              </div>
              <div className="flex items-center space-x-4">
                {/* Email Icon */}
                <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <p className="font-roboto">kkghosh0099@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                {/* Phone Icon */}
                <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <p className="font-roboto">+91 9007062180</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-2/3 p-8">
            <h3 className="text-3xl font-playfair text-gray-700 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input {...register('firstName')} placeholder="First Name" className={`w-full p-3 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <input {...register('lastName')} placeholder="Last Name" className={`w-full p-3 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
                <div>
                  <input {...register('email')} placeholder="Email Address" className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <input {...register('mobile')} placeholder="Mobile Number" className={`w-full p-3 border rounded-md ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                </div>
              </div>
              <div className="mb-6">
                <textarea {...register('message')} placeholder="Write your message here..." rows={5} className={`w-full p-3 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <div>
                <button type="submit" className="bg-amber-400 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      <Map />
      </div>
    </section>
  )
}

export default ContactSection