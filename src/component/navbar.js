import React from 'react'

export default function navbar() {
    const data=[
        {name:"Home"},{name:"About Us"},{name:"Our Projects"},{name:"Investors"},{name:"Careers"},{name:"Contact Us"}
    ]
  return (
    <div className=''>
        <div className='mx-[200px] h-[113px] text-sm flex justify-center items-center  '>
            <div className='w-[256px] h-[65px] flex  items-center'>
                <div className=' pr-3 '>
                    Logo
                </div>
                <div className='grid grid-rows-2 border-l-[1px] border-gray-400 pl-3'>
                    <label className='text-[#393939] font-extrabold text-4xl'>ARKADE</label>
                    <label className='text-[#eb870d]'>The Feature is now</label>
                </div>
            </div>
            <div className='flex text-md gap-1 items-center font-semibold'>
                <div className=' flex gap-2  '>
                    {data.map((val,index)=>{
                        return(
                            <label className='hover:cursor-pointer mr-1 shadow-sm break-all hover:text-[#eb870d]'>
                            {val.name}
                            </label>
                        )
                    })}
                </div>
                <div className='bg-[#eb870d] py-2 px-5 ml-2 hover:cursor-pointer'>
                    Schedule a site visit 
                </div>

            </div>
        </div>
    </div>
  )
}
