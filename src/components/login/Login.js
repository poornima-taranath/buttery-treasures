import { NUMBER_BINARY_OPERATORS } from "@babel/types";
import "../../styles/App.scss";
import {Label,Input,Button,Divider,Container} from "semantic-ui-react"
export default function Login() {
    return (
      <Container textAlign="center" className="loginbox">
         
        <label> Username:   </label>
        <Input type="text"></Input>
         <Divider/>
        <label>Password:   </label>
        <Input type="password"></Input>
        <br></br>
        <br></br>
        <br></br>
        <Button color="grey">Login</Button>
        
      </Container>
    );
  }