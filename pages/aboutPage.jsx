export default function AboutPage() {
  return (
    <div className='w-full h-[calc(100vh-100px)]'>
        <div className='w-full h-full flex flex-col'>
            <div className="w-full h-[100px] flex items-center my-4">
                <h1 className="w-full text-[30px] lg:text-[40px] font-bold text-center">About US</h1> 
            </div>  
            
            <div className="w-full flex flex-row">
                <div className='w-full lg:w-[50%] flex items-center flex-col gap-6 px-12 py-4'>
                <h1 className='text-[25px] text-secondary text-justify'>
                Welcome to Isuri Computers, your trusted partner in technology solutions. Established with a vision to provide top-notch computer products and services, we have been serving our community with dedication and excellence. 
                </h1>
                <img src="/about-img-1.jpg" className="lg:hidden h-[250px] w-[450px] rounded-2xl"  />
                <h1 className="text-[25px] text-secondary text-justify">
                We are passionate about technology and committed to serving gamers, PC builders, and tech enthusiasts with reliable products and professional service.We offer a wide range of gaming PC components, including processors (CPUs), graphics cards (GPUs), motherboards, RAM, SSDs, HDDs, power supplies, cooling solutions, gaming cases, and accessories from trusted brands. Whether you are building a custom gaming PC, upgrading your system, or looking for the best gaming hardware, i-Computers is your one-stop solution.
                </h1>
                <img src="/about-img-2.jpg" className="lg:hidden h-[250px] w-[450px] rounded-2xl"  />
                <h1 className="text-[25px] text-secondary text-justify">
                At i-Computers, customer satisfaction is our top priority. Our experienced team provides expert advice, competitive pricing, and genuine products, helping customers choose the right components based on performance needs and budget. We believe in honest recommendations and long-term trust rather than quick sales
                </h1>
                <img src="/about-img-3.jpg" className="lg:hidden h-[250px] w-[450px] rounded-2xl" />
                
                <div className="lg:hidden w-full flex flex-col ">
                    <h1 className=" text-[40px] font-bold text-secondary text-center my-4">
                    Plug In. Power Up. Play Hard
                    </h1>
                    <div className="w-full flex flex-col items-center p-8 gap-2 border border-accent rounded-2xl my-6">
                        <h1 className="text-secondary text-[30px] underline">
                            Our Vision
                        </h1>
                        <h2 className="text-secondary text-[25px] text-justify">
                            To become a leading and trusted gaming computer and PC components provider, recognized for quality products, expert service, and innovation, empowering gamers and technology enthusiasts to achieve peak performance.
                        </h2>
                    </div>
                    <div className="w-full flex flex-col items-center p-8 gap-2 border border-accent rounded-2xl my-6">
                        <h1 className="text-secondary text-[30px] underline">
                            Our Mission
                        </h1>
                        <h2 className="text-secondary text-[25px] text-justify">
                            Our mission at Isuri Computers is to provide high-quality gaming components, reliable computer solutions, and expert technical support at competitive prices. We are committed to delivering honest advice, excellent customer service, and dependable after-sales support while helping our customers build, upgrade, and maintain high-performance systems with confidence.
                        </h2>
                    </div>
                </div>
                
            </div>
            <div className='hidden w-full lg:w-[50%] lg:flex items-center justify-center flex-col gap-6'>
                <img src="/about-img-1.jpg" className="h-[250px] w-[450px] rounded-2xl" />
                <img src="/about-img-2.jpg" className="h-[250px] w-[450px] rounded-2xl" />
                <img src="/about-img-3.jpg" className="h-[250px] w-[450px] rounded-2xl" />
                
            </div>
            </div>

            <div className="hidden w-full lg:flex flex-col items-center justify-center my-8 ">
                <h1 className=" text-[40px] font-bold text-secondary text-center my-6">
                Plug In. Power Up. Play Hard
                </h1>
                <div className="w-[50%] p-8 border border-accent rounded-2xl my-6">
                    <h1 className="text-secondary text-[30px] underline text-center">
                            Our Vision
                        </h1>
                        <h2 className="text-secondary text-[25px] text-justify">
                            To become a leading and trusted gaming computer and PC components provider, recognized for quality products, expert service, and innovation, empowering gamers and technology enthusiasts to achieve peak performance.
                        </h2>
                </div>
                <div className="w-[50%] p-8 border border-accent rounded-2xl my-6">
                    <h1 className="text-secondary text-[30px] text-center underline">
                            Our Mission
                        </h1>
                        <h2 className="text-secondary text-[25px] text-justify">
                            Our mission at Isuri Computers is to provide high-quality gaming components, reliable computer solutions, and expert technical support at competitive prices. We are committed to delivering honest advice, excellent customer service, and dependable after-sales support while helping our customers build, upgrade, and maintain high-performance systems with confidence.
                        </h2>
                </div>
            </div>
            
        </div>
        
        
    </div>
  )
}