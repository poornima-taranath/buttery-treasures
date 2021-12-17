import react from "react";
import { useParams } from "react-router";
import { Container } from "semantic-ui-react";
import data from "./fullRecipes.json"

export default function Display(props) {
  const { id } = useParams();
  console.log(id);

  
    return (
    <div>
     { data.map((food)=>{ 
       if(id == food.id)
       { return(<div>
        <h3>{food.header}</h3>
        <Container>{food.content.map((line)=>{return <div>{line}</div>})}</Container>
        </div>)
       
     }
     else if(id == NaN){
       return <h3>Not found</h3>
     }

     })}
       </div>
    );
   
  
  
}
