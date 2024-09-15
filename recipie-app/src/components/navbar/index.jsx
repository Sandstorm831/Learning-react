import '../../output.css'

export default function Navbar(){
    return <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap:0">
        <h2 className="text-2xl font-semibold">FoodRecipie</h2>
        <forms>
            <input
            type='text'
            name='search'
            placeholder='Enter Items...'
            className='bg-black/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-300 focus:shadow-red-400'
            />
        </forms>
    </nav>
}
