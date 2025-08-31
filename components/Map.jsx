import React from 'react'

const Map = () => {
  const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.16936384214!2d76.27581727549609!3d28.504505975739347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391266854e85d92b%3A0x8e5b41f237f3748e!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1725108812345!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin";
  const mapDirectionsUrl = "https://maps.app.goo.gl/7HAxWiKVMqSVKrDX6";

  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-xl overflow-hidden">
        {/* Left Side: Info & Directions */}
        <div className=" md:w-1/2 lg:w-1/4 p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-playfair text-brand-slate mb-4">Find Us Easily</h3>
          <p className="font-roboto text-gray-600 mb-6">
            Located in a serene spot, our guest house is easy to find. Get directions and start your journey to a relaxing stay.
          </p>
          <a
            href={mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit bg-amber-400 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300 text-center inline-block"
          >
            Get Directions
          </a>
        </div>

        {/* Right Side: Map Iframe */}
        <div className="md:w-1/2 lg:w-3/4 h-128 md:h-auto">
          <iframe
            src={mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Map