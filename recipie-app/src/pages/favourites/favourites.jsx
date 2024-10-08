import { useContext } from "react"
import { GlobalContext } from "../../Context"
import RecipeItem from "../../components/recipe_item"

export default function Favourites(){
    const { favouritesList } = useContext(GlobalContext)


    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            favouritesList && favouritesList.length > 0 ?
            favouritesList.map((item, idx) => {
                return <RecipeItem item={item} key={idx} />
            })
            : <div className="lg:text-4xl text-xl text-center text-black font-extrabold">Nothing added in favourites</div>
        }
    </div>
}