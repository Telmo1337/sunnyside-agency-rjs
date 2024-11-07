import leftImg from '../assets/images/desktop/image-graphic-design.jpg';
import rightImg from '../assets/images/desktop/image-photography.jpg';

const BothAbout = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='relative'>
        <img src={leftImg} alt="Graphic design" className='w-full h-full object-cover' />
        <div className='absolute inset-x-0 bottom-0 text-[#25564b] flex flex-col items-center justify-end space-y-4 sm:space-y-8 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8'>
          <h2 className='font-fraunces text-2xl sm:text-3xl lg:text-4xl font-bold text-center'>Graphic Design</h2>
          <p className='text-sm sm:text-base lg:text-lg max-w-[300px] sm:max-w-[400px] lg:max-w-[430px] text-center'>
            Great design makes you memorable. We deliver artwork that underscores
            your brand message and captures potential clients attention.
          </p>
        </div>
      </div>
      <div className='relative'>
        <img src={rightImg} alt="Photography" className='w-full h-full object-cover' />
        <div className='absolute inset-x-0 bottom-0 text-[#23303e] flex flex-col items-center justify-end space-y-4 sm:space-y-8 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8'>
          <h2 className='font-fraunces text-2xl sm:text-3xl lg:text-4xl font-bold text-center'>Photography</h2>
          <p className='text-sm sm:text-base lg:text-lg max-w-[300px] sm:max-w-[400px] lg:max-w-[430px] text-center'>
            Increase your credibility by getting the most stunning high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BothAbout;
