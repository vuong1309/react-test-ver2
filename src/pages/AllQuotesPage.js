import Quote from '../components/Quote';
import request from '../request';
import axios from 'axios';
import { useEffect, useState } from 'react';


const AllQuotesPage = () => {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios.get(request).then((response) => {
            setQuotes(response.data.results)
        })
    }, [])

    return (
        <>
            <div className='w-full h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                {quotes.map(QuoteObj => <Quote
                    key={crypto.randomUUID()}
                    QuoteObj={QuoteObj} />)}
            </div>
        </>
    )
}

export default AllQuotesPage;