import React from 'react'
import Card from './Card'

const CardSection = () => {
  const items=[
    {
      title:'+300',
      dis:'We have successfully completed a total of 300+ projects',
      vid:'volchek-color.mp4'
    },
    {
      title: '100K',
      dis: 'We’ve gathered dozens of reviews from the clients and + 100k ',
      vid: 'pruzina-color.mp4'
    },
    {
      title: '+10',
      dis: 'Years of experience',
      vid: 'time-color.mp4'
    },
    {
      title: '+280',
      dis: 'Team members all over the world',
      vid: 'ball-color.mp4'
    }
  ]
  return (
    <>
      <h4 className='font-semibold text-gray-400 mt-2 mb-6'>Some Number About Us</h4>
      <div className='py-4 grid  grid-cols-2'>
        <div className="grid grid-cols-2 gap-4 w-11/12">
          {items.map((item, index) => (
            <Card key={index} {...item}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default CardSection