import { NavLink } from 'react-router-dom'
import '../../output.css'
import { useContext } from 'react'
import { GlobalContext } from '../../Context'

export default function Navbar(){

    const {searchParam, setSearchParam} = useContext(GlobalContext)
    console.log(searchParam)


    return <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap:0">
        <h2 className="text-2xl font-semibold"><NavLink to={"/"}>FoodRecipie</NavLink></h2>
        <forms>
            <input
            type='text'
            name='search'
            placeholder='Enter Items...'
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            className='bg-black/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-300 focus:shadow-red-400'
            />
        </forms>
        <ul className='flex gap-5'>
            <li>
                <NavLink to={"/"} className="text-black hover:text-gray-700 duration-300">Home</NavLink>
            </li>
            <li>
                <NavLink to={"/favourites"} className="text-black hover:text-gray-700 duration-300">Favourites</NavLink>
            </li>
        </ul>
    </nav>
}
