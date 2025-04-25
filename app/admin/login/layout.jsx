import React from 'react'

export const metadata = {
    title: 'Admin Login',
    description: 'This is the portfolio of Prajwal Neupane and we are at Admin Login',
  };

const layout = ({children}) => {
  return (
    <html>
        <body>
            <div>
                {children}
            </div>
        </body>
    </html>
  )
}

export default layout