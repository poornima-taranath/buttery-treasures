import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import {
  Button,
  Label,
  Container,
  Grid,
  Input,
  Header,
  Menu,
  Item,Icon,Divider
} from "semantic-ui-react";
import { Component } from "react";
import Navbar from "./NavBar";
import Login from "./Login.js"
import seeRecipes from './seeRecipes.js'
import cakerain from "./cakerain.jpeg"
import brownie from "./Homemade-Boxed-Brownies-Thumbnail1-scaled.jpg"
import chocoo from "./chocolate-chip-cookies.jpeg"
import withNavigate from "./withNavigate";

class Recipes extends Component {
  list=[{head:"Rainbow Cake",desc:" A colorful cake which is everyone's favourite",id:1,src:cakerain},
         {head:"Good Old Brownies",desc:"The classic home dessert",id:2,src:brownie},
         {head:"Chocochip Cookies",desc:"Every bakery's tasteful smell",id:3,src:chocoo}]

  state={curReciepe:0}

  reciepeClick=(id)=>{

   
     this.props.navigate(`/recipes/${id}`)
    

  }

    render() {
      return (
        <div>
          <h2 className="recipe"> Baking </h2>
          {this.list.map((a)=>{
               return(
                 
                <Item.Group divided>
                <Item>
                  <Item.Image size="tiny" src={a.src}/>
                  <Item.Content>
                    <Item.Header as="a" className="header-styles">{a.head}</Item.Header>
                    <Item.Description verticalAlign="middle">
                     {a.desc}
                    </Item.Description>
                    <Button primary  floated="right" onClick={()=>{this.reciepeClick(a.id)}}>
                      See recipe
                      <Icon name="right chevron"/>
                    </Button>
                  </Item.Content>
                </Item>
              </Item.Group>


               )
          })}

          
          
        </div>
      );
    }
  }

  export default withNavigate(Recipes)