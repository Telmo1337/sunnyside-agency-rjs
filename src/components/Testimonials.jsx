import { testimonials } from '../constants/index.js';

const Testimonials = () => {
    return (
        <div className='flex flex-col justify-center items-center my-20 md:my-40 space-y-10 md:space-y-20 px-4 md:px-0'>
            <h1 className='text-3xl md:text-4xl font-fraunces font-bold tracking-widest text-[#a7abae] text-center'>
                Client Testimonials
            </h1>
            <div className='flex flex-col lg:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-6'>
                {testimonials.map((testimonial, i) => (
                    <div
                        key={i}
                        className='flex flex-col justify-center items-center text-center
                       w-full md:w-[320px] lg:w-[480px] h-auto bg-[#f8f8f8] p-6 md:p-10 rounded-sm shadow-lg 
                       hover:shadow-xl transition duration-500 ease-in-out 
                       transform hover:-translate-y-1 hover:scale-105'
                    >
                        <img src={testimonial.avatar} alt="avatar" className='rounded-full w-16 h-16 md:w-20 md:h-20' />
                        <p className='py-8 md:py-14 text-[#23303e] text-lg md:text-xl'>{testimonial.text}</p>
                        <h4 className='font-fraunces text-lg md:text-xl font-black text-[#23303e]'>{testimonial.name}</h4>
                        <p className='pt-2 md:pt-4 text-[#a7abae] text-sm md:text-base font-medium font-barlow'>{testimonial.position}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
