import '../output.css'

export default function Search({city, setCity, handleSubmit}){
    return <div>
        <input 
        type='text'
        name="city_name"
        value={city}
        placeholder='Enter your city name'
        onChange={(event) => setCity(event.target.value)}
        />
        <button onClick={() => handleSubmit()}>Click me</button>
        Search
    </div>
}