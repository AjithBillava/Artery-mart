import { useData } from "../Context/DataContext"

export const Home = () =>{
    const {prodData} = useData()

    return(
        <div>
            {/* <div className="banner">
                <img src="../resources/images/banner.jpg" alt="banner" />
            </div> */}

            {
                prodData.map(item=>(
                    <div>
                        
                    </div>
                ))
            }
        </div>
    )
}