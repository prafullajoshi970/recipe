
import React, { useEffect, useState } from "react";

const App= () => {
  const [query, setQuery] = useState("paneer");
  const [data, setData] = useState([]);
  const [isClicked,setIsClicked] =useState(false);

  useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&app_id=ca9a1e0d&app_key=d2c30fc5bd6762dbac5b78b1925d68e1&type=public`).then(
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
      <h1>Welcome</h1>
      <input className="inputbox" onChange={(e)=>{setQuery(e.target.value)}} type="text"></input>
      <button onClick={()=>(setIsClicked(true))}>Search Here!</button>
      {
      data.map((item, i) => {
        return <div key={i}>
        <span> <p>{item.recipe.label}</p>
          <img src={item.recipe.image} alt=""></img></span> 
        </div>
      })
      }
    
    </div>

  );
}

export default App;
