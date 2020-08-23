import {useState, useEffect} from 'react'
import { API_KEY } from './../Keys/keys';

const CONTEXT_KEY = "e9e2f1faaa86e06f5";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
               `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}` 
            )
            .then(response => response.json())
            .then(result => setData(result))
        }

        fetchData();
    }, [term])

    return { data }
}

export default useGoogleSearch
