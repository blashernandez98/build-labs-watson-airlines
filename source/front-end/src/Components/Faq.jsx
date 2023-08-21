import React from 'react'
import faqs from '../faqs.json'

function FaqSection() {
  return (
    <div className='flex flex-col gap-2 px-20 py-10'>
      <div className='flex flex-row gap-2 items-center'>
        <h2 className='text-3xl font-normal text-zinc-800'>
          Preguntas frecuentes
        </h2>
        <img src='../../public/faq.png' className='w-10 h-10' />
      </div>
      <div className='flex flex-col gap-4 mt-5'>
        {faqs.map((faq, index) => {
          return (
            <div key={index} className='flex flex-col gap-2'>
              <h3 className='text-xl font-normal text-zinc-800'>
                {faq.question}
              </h3>
              <p className='text-lg text-zinc-700'>{faq.answer}</p>
              <span className='bg-zinc-700 h-1 rounded-lg'></span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FaqSection
