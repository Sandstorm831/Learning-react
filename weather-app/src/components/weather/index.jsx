import Search from '../search'
import '../output.css'
import { useEffect, useState } from 'react'
import CityList from '../city_list';


export default function Weather(){
    const [displayData, setDisplayData] = useState(null)
    const [city, setCity] = useState('Bengaluru');
    const [selected, setSelected] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const limit=3
    const API_Key = "";//Create your own API Key 
    let submitDebouncer;
    let submitAborter = null;

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function fetcher(url){
        if(submitAborter){
            console.log(submitAborter);
            submitAborter.abort();
            console.log(submitAborter);
        }
        submitAborter = new AbortController();
        const runSignal = submitAborter.signal;
    
        try{
            // console.time("started")
            const response = await fetch(url, {runSignal});
            // console.timeEnd("started")
            // console.time("ended")
            const data = await response.json();
            submitAborter = null;
            setDisplayData(data);
            console.log(data);
            // console.timeEnd("ended")
        } catch(e){
            console.log(e.name)
        }
    }

    function handleSubmit(){
        if(submitDebouncer){
            clearTimeout(submitDebouncer);
        }
        setLoading(true)
        submitDebouncer = setTimeout(() => {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_Key}`;
            fetcher(url)
            sleep(50)
            fetcher(url)
        }, 200)
    }

    // function handleSubmit(){
    //     if(submitDebouncer) {
    //         clearTimeout(submitDebouncer);
    //         setLoading(false)
    //     }
    //     if(submitAborter) {
    //         submitAborter.abort();
    //     }
    //     setLoading(true);
    //     submitDebouncer = setTimeout(async () => {
    //         submitAborter = new AbortController();
    //         const submitSignal = submitAborter.signal;
    //         try{
    //             fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_Key}`, {submitSignal}).then((response) => {
    //                 response.json().then((dataCity) => {
    //                     if(dataCity.length > 0){
    //                         const lat = dataCity[0].lat;
    //                         const long = dataCity[0].lon;
    //                         try{
    //                             fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_Key}`, {submitSignal}).then((response) => {
    //                                 response.json().then((data) => {
    //                                     console.log(data)
    //                                     console.log(submitAborter)
    //                                 })
    //                             })
    //                         } catch(e){
    //                             if(e.name === 'AbortError'){
    //                                 alert("inner aborted")
    //                             }
    //                             else{
    //                                 setLoading(false)
    //                                 setError(e)
    //                             }
    //                         }
    //                     }
    //                     else{
    //                         setLoading(false)
    //                         setError(null)
    //                         alert("City not found, Please check spelling of your city, and try again!")
    //                     }
    //                 })
    //             })
    //         } catch(err){
    //             if(err.name === 'AbortError'){
    //                 alert("Aborted")
    //             }
    //             else{
    //                 setError(err)
    //                 setLoading(false)
    //             }
    //         }
    //     }, 500)
    // }

    // useEffect(() => {
    //     setSelected(false)
    //     const CityName = setTimeout(() => {
    //         if(city !== "" && !selected){
    //             setSearchData([])
    //             fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_Key}`).then((response)=>{
    //                 response.json().then((data) => {
    //                     setSearchData(data)
    //                     console.log(data)
    //                 })
    //             })
    //         }
    //         else{
    //             setSearchData([])
    //         }
    //     }, 300);

    //     return () => clearTimeout(CityName);
        
    // }, [city])


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

    return <div>
        <Search city={city} setCity={setCity} handleSubmit={handleSubmit}/>
        <CityList searchData={searchData} setSearchData={setSearchData} setCity={setCity} setSelected={setSelected}/>
    </div>
}
