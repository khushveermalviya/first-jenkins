import React from 'react';
import Cards from './Cards';
import ReactImageMagnify from 'react-image-magnify';
import watchImg300 from '/pexels-oussama-bergaoui-463684.jpg'; // replace with the actual path to your image
import '../App.css';
function Description() {
  
  return (
    <div className=' flex '>
  
   <div className='sochd'>
   <ReactImageMagnify {...{
        smallImage: {
          alt: 'Wristwatch by Ted Baker London',
          isFluidWidth: true,
          src: watchImg300
        },
        largeImage: {
          src: watchImg300,
          width: 529,
          height: 750
        }
      }} />
   </div>
<div className='flex-col flex mt-40
ml-10 justify-between'>
<div className='w-full bg-slate-400  text-xl text-bold'>tasdfasdfasjdkllll  </div>
<div>
  <button className='border-round border-red-400 bg-zinc-700'>
    Add To Cart
  </button>

</div>
<div>
  Buy now
</div>
<div>
  many items
</div>

<div>Description</div>

</div>

    </div>
  )
}

export default Description;