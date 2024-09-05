import { useContext } from 'react'
import '../output.css'
import { Usercontext } from '../outside_clicker'


export default function CityList({searchData, setSearchData, setCity, setSelected}){

    function handleDropDownclick(cityName){
        setSearchData([])
        setCity(cityName)
        setSelected(true)
    }

    const focussed = useContext(Usercontext)

    return <li>

    {
        searchData && focussed?
        searchData.map((objs, idx) => {
            return <ul className='cursor-pointer' onClick={() => handleDropDownclick(objs.name)} >{objs.name} & {objs.country}</ul>
        } )
        : null
    }
    </li>
}
