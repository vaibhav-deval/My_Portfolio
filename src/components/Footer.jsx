import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-gray-100 text-center py-4">
        <p>
          &copy; {new Date().getFullYear()} Vaibhav Deval. All rights reserved.
        </p>
      </footer>
  )
}

export default Footer