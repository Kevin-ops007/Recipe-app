import React,{useState} from "react"
import Axios from "axios"
import {v4 as uuidv4} from "uuid"
import Alert from "./components/Alert.js"
import Recipe from "./components/Recipe.js"
import "./App.css"



const App=()=>{
    const[query,setQuery]=useState("")
    const[recipes,setRecipe]=useState([])
    const[alert,setAlert]=useState("")
    const App_ID="23015f08"
    const App_Key="0f514f8c2448c8a9a2d83a146ef26c20"
    const url = `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`

const getData=async() =>{
    if(query!==""){
        const result = await Axios.get(url)
        setRecipe(result.data.hits)
        if(!result.data.more)
            return setAlert("No food with such name")
        console.log(result)
        setQuery("")
        setAlert("")
    }else{
        setAlert("Please fill the form")
    }
}
const onSubmit = (e) =>{
    e.preventDefault()
    getData()
}


    const onChange = (e) =>{
     setQuery(e.target.value)

    }
        return(
            <div className="App">
                <h1>Recipios</h1>
                <form class="search-form" onSubmit={onSubmit} >
                    {alert!=="" && <Alert alert={alert} />}
                    <input 
                    type="text" 
                    name="query" 
                    onChange ={onChange} 
                    value ={query} placeholders="Search Food" autoComplete="off" />
                    <input type="submit" value="search" />
                </form>  
                <div className="recipes">
                    {recipes!==[] && recipes.map(recipe =><Recipe key={uuidv4()} recipe={recipe} />)}
                </div>     
            </div>
        )

    
            
}



export default App