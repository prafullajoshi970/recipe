
import React, { useEffect, useState } from "react";

const App= () => {
  const [query, setQuery] = useState("paneer");
  const [data, setData] = useState([]);
  const [isClicked,setIsClicked] =useState(false);

  useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&app_id=53215cc5&app_key=e36b39dd8b3bd1235cc44d6dd9021cee 	&type=public`).then(
      (Response) => Response.json()
    ).then(
      (data) => {
        console.log(data.hits)
        const arraydata = data.hits
        setData(arraydata)
      }
    )
    // eslint-disable-next-line
  },[isClicked])

  return (
    <div>
      <input onChange={(e)=>{setQuery(e.target.value)}} type="text"></input>
      <button onClick={()=>(setIsClicked(true))}>click</button>
      {
      data.map((item, i) => {
        return <div key={i}>
          <p>{item.recipe.lable}</p>
          <img src={item.recipe.image} alt=""></img>
        </div>
      })
      }
    
    </div>

  );
}

export default App;
