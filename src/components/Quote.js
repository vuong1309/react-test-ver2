import React from 'react'

const Quote = ({ QuoteObj }) => {
    return (
        <div className='h-[350px] border-solid p-4 border-black border-[1px] rounded flex flex-col'>
            <div className='w-full h-[250px] mb-2'>"{QuoteObj?.content}"</div>
            <p className='font-bold text-sm italic'>{QuoteObj?.author}</p>
            <p className='max-w-[200px] truncate'>{QuoteObj?.tags}</p>
        </div>
    )
}

export default Quote;