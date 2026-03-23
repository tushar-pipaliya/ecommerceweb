import React from 'react'

const ViewDetails = ({cardData}) => {
    
    console.log(cardData, 'cardData')
    return (
        <div className='bg-gray-100 flex '>
            <div className='image w-1/2 flex justify-center '>
                <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" alt="" className='w-70' />
            </div>
            <div className='w-1/2'>
                <p className='text-blue-500 text-xl leading-loose'>Men's clothing</p>
                <h1 className='font-bold text-4xl'>{cardData.title}</h1>
                <p><span className='mr-3'>⭐⭐⭐⭐</span><span className='text-gray-500 font-semibold'>(259 reviews)</span></p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni consectetur, ea voluptatibus aspernatur suscipit. Est obcaecati, culpa illo impedit fugit dolor labore assumenda ut molestiae atque! Harum quos praesentium neque pariatur commodi alias et?
                </p>
            </div>
        </div>
    )
}

export default ViewDetails
