import Search from '../search'
import '../output.css'
import { useContext, useEffect, useRef, useState } from 'react'
import CityList from '../city_list';
import OutsideInsideClicker from '../outside_clicker';
import { Usercontext } from '../outside_clicker';

export default function Weather(){
    const [displayData, setDisplayData] = useState(null)
    const [city, setCity] = useState('Bengaluru');
    const [selected, setSelected] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const limit=3
    const API_Key = 'Enter Your Own key from openweathermap'
    let submitDebouncer;
    let submitAborter = null;

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function fetcher(){
        if(submitAborter) submitAborter.abort();

        submitAborter = new AbortController();
        const signal = submitAborter.signal;

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_Key}`, {signal})
        .then((response) => {

            if(response.ok) return response.json();
            else throw Error("Response is not OK");
        })
        .then((dataCity) => {
            if(dataCity.length > 0){
                const lat = dataCity[0].lat;
                const lon = dataCity[0].lon;
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}`;
                return fetch(url, {signal});
            }
            else{
                setLoading(false);
                setError(Error("City not found! Please check spelling of your city, and try again!"));
                submitAborter = null;
                throw(Error("City not found! Please check spelling of your city, and try again!"));
            }
        })
        .then((response) => {
            if(response.ok) return response.json();
            else throw Error("Second API response not OK")
        })
        .then((data) => {
            console.log(data)
            console.log("Finally, last call back hell")
        })
        .catch((error) => {
            console.log(error.message);
            setError(error);
            setLoading(false);
        })
    }

    function handleSubmit(){
        if(submitDebouncer){
            clearTimeout(submitDebouncer);
        }
        setLoading(true)
        submitDebouncer = setTimeout(async () => {
            fetcher()
            await sleep(20)
            fetcher()
        }, 250)
    }

    useEffect(() => {
        setSelected(false)                          // To specify that new input is given, city is not finalized
        const controller = new AbortController();   // Used to abort the fetch request
        const cityName = setTimeout(async () => {   // Debouncer, if input is typed in speed, only final input to fetch (300ms), nothing else
            setSearchData([])
            const signal = controller.signal;
            if(city !== "" && !selected){
                try{
                    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_Key}`, { signal });
                    const data = await response.json();
                    setSearchData(data);
                } catch(e){
                    if (e.name === 'AbortError'){
                        setSearchData([])
                    }
                    else{

                        console.log("Some Error Occured : " + e.message)
                    }
                }
            }
            else{
                setSearchData([])
            }
        }, 300)

        return () => {                              // cleanup function
            if(controller) controller.abort();
            clearTimeout(cityName);
        }

    }, [city])

    return <div className='bg-blue-200'>
        <OutsideInsideClicker>
            <Search city={city} setCity={setCity} handleSubmit={() => handleSubmit()} />
            <CityList searchData={searchData} setSearchData={setSearchData} setCity={setCity} setSelected={setSelected}/>
        </OutsideInsideClicker>
    </div>
}
