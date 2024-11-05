import leftImg from '../assets/images/desktop/image-graphic-design.jpg';
import rightImg from '../assets/images/desktop/image-photography.jpg'

const BothAbout = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
      <div className='relative'>
        <img src={leftImg} alt="" className='w-full h-full' />
        <div className='absolute inset-0 text-[#25564b] flex flex-col items-center justify-end space-y-12 pb-32'>
          <h1 className='font-fraunces text-4xl font-bold'>Graphic Design</h1>
          <p className='text-xl max-w-[430px] text-center'>
            Great design makes you memorable.
            We deliver artwork that underscores your brand message
            and captures potential clients attention.
          </p>
        </div>
      </div>
      <div className='relative'>
        <img src={rightImg} alt="" className='w-full h-full' />
        <div className='absolute inset-0 text-[#23303e] flex flex-col items-center justify-end space-y-12 pb-32'>
          <h1 className='font-fraunces text-4xl font-bold'>
            Photography
          </h1>
          <p className='text-xl max-w-[430px] text-center'>
            Increase your credibility by getting the most stunning
            high-quality photos that improve your business image.
          </p>
        </div>
      </div>

    </div>
  )
}

export default BothAbout
