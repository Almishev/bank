import React from 'react'

const FooterComponent = () => {

  let today = new Date()

  return (
    <div className='mt-5'>
        <footer className='footer'>
            <p className='text-center mt-2'>{today.getFullYear()} Copyrights Anton Almishev</p>
        </footer>
    </div>
  )
}

export default FooterComponent