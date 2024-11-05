import {gallery } from '../constants/index';


const GallerySection = () => {
  return (
    <div className='flex justify-center items-center '>
      {gallery.map((item) => {
        return (
            <div key={item.id}>
                <img src={item.img} alt={item.title} />
            </div>
        )
      })}
    </div>
  )
}

export default GallerySection
