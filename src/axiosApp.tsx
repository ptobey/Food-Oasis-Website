import React from "react"
import Axios from "axios"

export default function AxiosApp (){

    const apiurl = "https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=U0lsUI6Xi9&x=-84&y=42&radius=30"

    Axios.get(apiurl).then(
    response => {

        console.log(response.data) }
    ).catch(err => {

        console.log(err)
    }

    );
    

return
(
<>


</>


)

}