import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <div className='py-4'>
      <h4 className='font-semibold text-gray-500'>Some Number About Us</h4>
      <div className="grid grid-cols-2 gap-5 w-4/6">
        {[1, 2, 3, 4].map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  )
}

export default CardSection