/* eslint-disable react/prop-types */
import backgroundIMG from '../assets/images/desktop/image-header.jpg';


const BackgroundLandingImg = ({children}) => {
  return (
    <div
    style={{
        backgroundImage: `url(${backgroundIMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: "100%",
        height: "100vh",
        position: 'relative',
    }}
    >
        {children}
    </div>
  )
}

export default BackgroundLandingImg
