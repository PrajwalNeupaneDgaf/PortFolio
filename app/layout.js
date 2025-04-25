import './globals.css';
import Navbar from "./Components/Navbar"

export const metadata = {
  title: 'Prajwal Neupane',
  description: 'This is the portfolio of Prajwal Neupane',
};


const layout = ({ children }) => {
  return (
    <html>
      <body>
        <div>
          <Navbar/>
        </div>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default layout