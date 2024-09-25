import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../Context"

export default function Details(){


    const {recipeDetailsData, setRecipeDetailsData} = useContext(GlobalContext)
    const {id} = useParams()


    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const data = await response.json()
            console.log(data)
        }
        getRecipeDetails()

    }, [id])

    return <div>Details</div>
}