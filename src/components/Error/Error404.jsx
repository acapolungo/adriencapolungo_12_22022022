import React from 'react'

export default function Error404({ error }) {
  return (
    <section className='error'>
      <div className='error__number'>404<span className='error__txt'>Oups... {error}</span>
      </div>
    </section>
  )
}
