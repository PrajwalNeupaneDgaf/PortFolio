import './globals.css';
import Navbar from "./Components/Navbar"

export const metadata = {
  title: 'Prajwal Neupane',
  description: 'This is the portfolio of Prajwal Neupane',
};


const layout = ({ children }) => {
  return (
    <html>
      <head>
      <link rel="icon" href="/Fav.jpg"  className='rounded-full'/>
      <meta name="color-scheme" content="light" />
      </head>
      <body>
        <div>
          <Navbar/>
        </div>
        <div className='pb-12'>{children}</div>
      </body>
    </html>
  )
}

export default layout