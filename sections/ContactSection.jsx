import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/src/utils/SectionHeading';
import Map from '../components/Map';
import { contactInfo } from '@/src/constants';
import schema from '@/src/validations/form';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form Data:', data);
      setSubmitStatus('success');
      reset();
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };


  return (
    <section 
      ref={sectionRef}
      className="contact-section py-8 sm:py-12 lg:py-16 xl:py-24 bg-gradient-to-br from-gray-50 to-amber-50 relative overflow-hidden"
      id="contact"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <SectionHeading 
            title="Get In Touch" 
            subtitle="We're here to help! Reach out to us for any inquiries or booking requests."
            className="mb-4 sm:mb-6 lg:mb-8"
          />
        </motion.div>

        {/* Mobile-responsive grid - stacks on mobile, side-by-side on large screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 mb-8 sm:mb-12 lg:mb-16"
        >
          {/* Left Side: Contact Info */}
          <motion.div variants={cardVariants} className="w-full">
            <motion.div 
              variants={itemVariants}
              className="w-full bg-white p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-xl border border-gray-100"
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">💬</span>
                Contact Information
              </motion.h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Ready to experience the tranquil beauty of Purulia? We're just a message away!
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-amber-50 transition-colors duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    onClick={() => window.open(info.href, info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? '_self' : '_blank')}
                  >
                    <motion.div 
                      className="text-xl sm:text-2xl flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-amber-600 transition-colors text-sm sm:text-base">
                        {info.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed break-words">{info.content}</p>
                      <span className="text-xs sm:text-sm text-amber-600 font-medium group-hover:underline">
                        {info.action} →
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <motion.div 
                className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200"
                variants={itemVariants}
              >
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Follow us for updates:</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Facebook', 'Instagram', 'WhatsApp'].map((social, index) => (
                    <motion.button
                      key={social}
                      className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-amber-100 hover:text-amber-700 transition-colors duration-200 text-xs sm:text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Contact Form  */}
          <motion.div variants={formVariants} className="w-full">
            <motion.div 
              className="w-full bg-white p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-xl border border-gray-100"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">📝</span>
                Send a Message
              </motion.h3>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  ✅ Thank you for your message! We'll get back to you within 24 hours.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  ❌ Something went wrong. Please try again or call us directly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                {/* Name Fields - FIXED mobile grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      {...register('firstName')}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 text-sm sm:text-base ${
                        errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Enter your first name"
                      disabled={isSubmitting}
                    />
                    {errors.firstName && (
                      <motion.p 
                        className="text-red-500 text-xs sm:text-sm mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {errors.firstName.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      {...register('lastName')}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 text-sm sm:text-base ${
                        errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Enter your last name"
                      disabled={isSubmitting}
                    />
                    {errors.lastName && (
                      <motion.p 
                        className="text-red-500 text-xs sm:text-sm mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {errors.lastName.message}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                {/* Email Field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 text-sm sm:text-base ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <motion.p 
                      className="text-red-500 text-xs sm:text-sm mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Mobile Field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    {...register('mobile')}
                    type="tel"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 text-sm sm:text-base ${
                      errors.mobile ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter your mobile number"
                    disabled={isSubmitting}
                  />
                  {errors.mobile && (
                    <motion.p 
                      className="text-red-500 text-xs sm:text-sm mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.mobile.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows="4"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 resize-vertical text-sm sm:text-base ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your requirements, preferred dates, or any questions you have..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <motion.p 
                      className="text-red-500 text-xs sm:text-sm mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-white transition-all duration-300 text-sm sm:text-base ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 hover:shadow-lg'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  variants={itemVariants}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <motion.div
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full mr-2 sm:mr-3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
          className="w-full"
        >
          <Map />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
