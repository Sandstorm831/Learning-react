import Search from '../search'
import '../output.css'
import { useEffect, useRef, useState } from 'react'
import CityList from '../city_list';


export default function Weather(){
    const [displayData, setDisplayData] = useState(null)
    const [city, setCity] = useState('Bengaluru');
    const [selected, setSelected] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const limit=3
    const API_Key = '40722dbfb21399c08dcf01d9e7bc015c'
    const searchAndCityListRef = useRef(null);
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

    function ClickOutsideRef(Ref){
        useEffect(() => {
            function handleClickOutside(event){
                if (searchAndCityListRef.current && !searchAndCityListRef.current.contains(event.target) ){
                    console.log("clicked outside the search and city list bar, therefore close it")
                }
                else if(searchAndCityListRef.current || searchAndCityListRef.current.contains(event.target)){
                    console.log("Clicked inside")
                }
            }
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [searchAndCityListRef]);
    }

    useEffect(() => {
        function handleClickOutside(event){
            if (searchAndCityListRef.current && !searchAndCityListRef.current.contains(event.target) ){
                console.log("clicked outside the search and city list bar, therefore close it")
            }
            else if(searchAndCityListRef.current || searchAndCityListRef.current.contains(event.target)){
                console.log("Clicked inside")
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchAndCityListRef]);

    return <div className='bg-blue-200'>
        <div ref={searchAndCityListRef} className='bg-amber-200'>
            <Search city={city} setCity={setCity} handleSubmit={() => handleSubmit()} />
            <CityList searchData={searchData} setSearchData={setSearchData} setCity={setCity} setSelected={setSelected}/>
        </div>
    </div>
}
