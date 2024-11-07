// CupAbout component
import cup from '../assets/images/desktop/image-stand-out.jpg';

const CupAbout = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-0'>
            <div className='mt-6 md:mt-0'>
                <img src={cup} alt="stand-out" className='w-full h-auto max-h-[500px] object-cover' />
            </div>
            <div className='space-y-6 md:space-y-12 md:ml-10 lg:ml-20'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl md:w-5/6 font-fraunces font-black text-[#23303e]'>
                    Stand out to the right audience
                </h1>
                <p className='text-[#344250] text-base md:text-lg lg:text-xl md:w-4/6 font-medium leading-7 md:leading-8 lg:leading-9 text-start font-barlow mb-6 md:mb-8 lg:mb-10'>
                    Using a collaborative formula of designers, researchers,
                    photographers, videographers, and copywriters, 
                    we’ll build and extend your brand in digital places.
                </p>
                <button className='hover:border-red-500 transition-all duration-500 ease-in-out hover:scale-105 pb-6'>
                    <a href="#" className='text-lg md:text-xl text-[#23303e] tracking-wider font-bold font-fraunces border-b-4 border-red-300'>
                        Learn more
                    </a>
                </button>
            </div>
        </div>
    );
};

export default CupAbout;
