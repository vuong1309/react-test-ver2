import request from '../request';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi'

const RandomQuotesPage = () => {

    const [randomQuotes, setRandomQuotes] = useState([]);
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        axios.get(request).then((response) => {
            setRandomQuotes(response.data.results)
        })
    }, [])

    const getRandomQuote = () => {
        const randomQuote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)]
        setContent(randomQuote?.content);
        setAuthor(randomQuote?.author);
    }

    return (
        <>
            <div className='h-[300px] w-[400px] mx-auto mt-5 border-solid p-4 border-black border-[1px] rounded flex flex-col'>
                <div className='w-full h-[200px] mb-2'>{content}</div>
                <p className='font-bold text-sm italic'>{author}</p>
            </div>
            <div className='flex justify-center items-center my-3 mx-auto'>
                <button
                    className='w-[150px] h-[40px] px-1 bg-blue-500 text-white rounded hover:bg-blue-400 transition flex justify-between items-center'
                    onClick={getRandomQuote}>Random Quote <FiRefreshCw /></button>
            </div>
        </>
    )
}

export default RandomQuotesPage;