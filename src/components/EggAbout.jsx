import egg from '../assets/images/desktop/image-transform.jpg';

const EggAbout = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center text-start px-4 md:px-0'>
            <div className='space-y-6 md:space-y-12 md:ml-28'>
                <h1 className='text-3xl md:text-6xl md:w-4/6 font-fraunces font-black text-[#23303e]'>
                    Transform your brand
                </h1>
                <p className='text-[#344250] text-base md:text-xl md:w-4/6 font-medium leading-7 md:leading-9 text-start font-barlow mb-6 md:mb-10'>
                    We are a full-service creative agency specializing
                    in helping brands grow fast. Engage your clients through
                    compelling visuals that do most of the marketing for you.
                </p>

                <button className='hover:border-yellow-500 transition-all duration-500 ease-in-out hover:scale-105'>
                    <a href="#" className='text-lg md:text-xl text-[#23303e] tracking-wider font-bold font-fraunces border-b-4 border-yellow-300'>
                        Learn more
                    </a>
                </button>
            </div>
            <div className='mt-6 md:mt-0'>
                <img src={egg} alt="egg" className='w-full h-full object-cover' />
            </div>
        </div>
    );
};

export default EggAbout;
