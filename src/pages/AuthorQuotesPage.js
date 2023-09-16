import axios from 'axios';
import React, { useEffect, useState } from 'react'
import request from '../request';

const AuthorQuotesPage = () => {

    const [authorQuotes, setAuthorQuotes] = useState([]);
    const [filterQuotes, setFilterQuotes] = useState(authorQuotes);

    useEffect(() => {
        axios.get(request).then((response) => {
            setAuthorQuotes(response.data.results);
            setFilterQuotes(response.data.results);
        })
    }, [])

    const filterAuthorQuotes = (e) => {
        const authorName = e.currentTarget.textContent;
        const filteredQuotes = authorQuotes.filter(item => item.author === authorName);
        setFilterQuotes(filteredQuotes)
    }

    return (
        <>
            <div className='w-full h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {filterQuotes.map(item =>
                    <>
                        <div className='h-[350px] border-solid p-4 border-black border-[1px] rounded flex flex-col'>
                            <div className='w-full h-[250px] mb-2'>"{item?.content}"</div>
                            <div className='w-fit p-2 hover:bg-slate-400 transition'>
                                <button
                                    className='font-bold text-sm italic w-fit '
                                    onClick={filterAuthorQuotes}>{item?.author}</button>
                                <p className='max-w-[200px] text-sm text-clip overflow-hidden'>{item?.tags.toString()}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default AuthorQuotesPage;