import { rooms } from '@/src/constants'
import RoomCard from '@/src/utils/RoomCard'
import SectionHeading from '@/src/utils/SectionHeading'
import React from 'react'

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading title="Our Accommodations" underlineclass="md:w-[320px]" className="items-center" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {rooms.map((room, index) => (
            <RoomCard 
              key={index}
              imageUrl={room.imageUrl}
              title={room.title}
              description={room.description}
              price={room.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoomsSection