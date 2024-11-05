import arrow from '../assets/images/icon-arrow-down.svg';

const HeroSection = () => {
    return (
        <div className="flex justify-center items-center min-h-[60vh] md:min-h-[80vh] w-full px-4 md:px-6 mt-4 md:mt-2">
            <div className='flex flex-col items-center text-center'>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-[0.1em] md:tracking-[0.2em] font-fraunces font-black uppercase">
                    We are creatives
                </h1>
                <img src={arrow} alt="arrow" className='mt-32' />
            </div>

        </div>
    )
}

export default HeroSection
