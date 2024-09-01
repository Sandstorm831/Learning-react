import '../output.css'

export default function CityList({searchData, setSearchData, setCity, setSelected}){

    function handleDropDownclick(cityName){
        setSearchData([])
        setCity(cityName)
        setSelected(true)
    }

    return <li>
    {
        searchData? 
        searchData.map((objs, idx) => {
            return <ul className='cursor-pointer' onClick={() => handleDropDownclick(objs.name)} >{objs.name} & {objs.country}</ul>
        } )
        : null
    }
    </li>
}