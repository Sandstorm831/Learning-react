import { useContext } from "react"
import { GlobalContext } from "../../Context"

export default function RecipeItem({item}){
    const {recipeList} = useContext(GlobalContext)
    return <div>
        {
        recipeList && recipeList.length>0 ?
        recipeList.map((item) => item.title) : null
        }
    </div>
}
