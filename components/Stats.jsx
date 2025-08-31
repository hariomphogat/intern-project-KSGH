
import Counter from '@/src/utils/Counter';
import React from 'react'

const Stats = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto ">
        <div className=" mx-auto bg-neutral-50 p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Counter to={150} title="Happy Customers" />
            <Counter to={100} title="Bookings Completed" />
            <Counter to={4} title=" Average Ratings" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats;
