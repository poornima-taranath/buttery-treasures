import "./styles/App.scss";
import React from "react";
import { FaCookieBite } from "react-icons/fa";
import { Route, Routes, Link } from "react-router-dom";
import {
  Button,
  Label,
  Container,
  Grid,
  Input,
  Header,
  Menu,
  Item,
  Icon,
  Divider,
  Segment,
} from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import { Component } from "react";
import Login from "./components/login/Login.js";
import Recipes from "./components/recipes/Recipes.js";
import Display from "./components/recipes/ViewRecipe";
import Discussion from "./components/discussion/Discussion";
import  Home  from "./components/home/Home";

export const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;

class App extends Component {
  state = {
    activePage: "home",
    searchInput: " ",
    mealsRes: [],
    notFound: false,
  };

  handleClick = (e, { name }) => {
    this.setState({ activePage: name });
  };

  searchChange = (e) => {
    this.setState(() => ({ searchInput: e.target.value }));
  };
  buttonClick = () => {
    const conPar = "?s=";
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php${conPar}${this.state.searchInput}`
    )
      .then((res) => res.json())
      .then((res) => {
       
        this.setState({ mealsRes: res.meals || [], notFound: !res.meals });
      });
      this.props.navigate("/", { replace: true });
  };

  render() {
    return (
      <div className="maindiv">
        <Container textAlign="center" className="box">
          <Header as="h1" className="header">
            Buttery Treasures <FaCookieBite icon="fa-regular fa-cookie-bite" />
          </Header>
          <Input
            type="text"
            placeholder="Search"
            className="box"
            onChange={(e) => this.searchChange(e)}
          ></Input>
          <Button
            secondary
            style={{ padding: "1rem", margin: "1rem" }}
            onClick={this.buttonClick}
          >
            {" "}
            Search{" "}
          </Button>
        </Container>

        <Container>
          <Menu pointing>
            <Menu.Item as={Link} to="/" name="home" onClick={this.handleClick}>
              Home
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/recipes"
              name="recipes"
              onClick={this.handleClick}
            >
              Recipes
            </Menu.Item>

            <Menu.Item
                as={Link}
                to="/community"
                name="Discuss"
                onClick={this.handleClick}
            >Discuss</Menu.Item>
            
            <Menu.Menu position="right">
              <Menu.Item
                as={Link}
                to="/login"
                name="login"
                onClick={this.handleClick}
              ></Menu.Item>
            </Menu.Menu>
          </Menu>       
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  meal={this.state.mealsRes}
                  notFound={this.state.notFound}
                />
              }
            />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recipes/:id" element={<Display />} />
            <Route path="/community" element={<Discussion />}/>
          </Routes>
        </Container>
      </div>
    );
  }
}

export default App
