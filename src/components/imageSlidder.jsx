import React from 'react'

export default function ImageSlidder(props) {

    const images = this.props.images
    const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <div className='w-full h-48 bg-red-900 flex flex-col items-center'>
        <img src={images[activeIndex]} className='w-[80%] h-[500px] object-contain' />
        <div className='w-full h-[100px] bg-accent flex flex-row justify-center gap-4'>
            {
            images.map((image, index) => {
                
                return(
                    <img src={images[index]} className={'w-[90px] h-[90px] object-cover rounded-lg' + ((activeIndex==index))?""}  onClick={()=>{
                        setActiveIndex(index)
                    }} />
                )
                }
            )
        }
        </div>
    </div>
  )
}
