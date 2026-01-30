import React, { useRef } from 'react'
export default function ImageGallery(props) {
 let imgref = useRef()
    let imgary = props.imgary;
    console.log(imgary)
    let imagesui = imgary.map((img)=><img src={img} className='w-12 h-12 '
    onClick={()=>imgref.current.src=img}></img>)
  return (
    <div>
        <img src={imgary[0]} className='w-4/5 aspect-square' alt=""  ref={imgref} />
        <div className='flex gap-4'>
                {imagesui}
        </div>
    </div>
  )
}
