import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { FaHeart, FaCookieBite } from "react-icons/fa";
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
  Form,
  Segment,
} from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import { Component } from "react";
import Navbar from "./NavBar";
import Login from "./Login.js";
import Recipes from "./Recipes.js";
import withNavigate from "./withNavigate";
import Display from "./seeRecipes";

const Bounce = styled.div`
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
        this.props.navigate("/", { replace: true });
        this.setState({ mealsRes: res.meals || [], notFound: !res.meals });
      });
  };

  render() {
    return (
      <div className="maindiv">
        <Container textAlign="center" className="box">
          <Header as="h1">
            Welcome
            <FaCookieBite icon="fa-regular fa-cookie-bite" />
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
            <Menu.Menu position="right">
              <Menu.Item
                as={Link}
                to="/login"
                name="login"
                onClick={this.handleClick}
              ></Menu.Item>
            </Menu.Menu>
          </Menu>

          <Bounce>
            <FaHeart
              style={{
                color: "red",
                fontSize: "25px",
                display: "flex",
                justifyContent: "center",
              }}
            />
          </Bounce>

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
          </Routes>
        </Container>
      </div>
    );
  }
}
var Home = function (props) {
  let { notFound } = props;
  if (notFound) {
    return (
      <div className="home">
        <p>
          Welcome to Buttery Treasures! Here, we offer you variety of food
          delicacies that you can easily make at your home
        </p>

        <ul>Sorry! This is not available with us :(</ul>

        <Container className="comment-box">
          <Header as="h3" style={{ color: "chocolate" }} dividing>
            {" "}
            Leave us a feeback!!
          </Header>
          <Form reply>
            <Form.TextArea />
            <Button secondary floated="right">
              Add a comment
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
  return (
    <div className="home">
      Welcome to Buttery Treasures! Here, we offer you variety of food
      delicacies that you can easily make at your home
      {props.meal.map((sen) => (
        <div className="instruct">
          <br></br>
          <p style={{ fontWeight: "bold", color: "blueviolet" }}>
            {sen.strMeal}
          </p>
          <br></br> Instructions<br></br>
          {sen.strInstructions}
          <br></br>
          <Container className="comment-box">
            <Header as="h3" style={{ color: "chocolate" }} dividing>
              {" "}
              Leave us a feeback!!
            </Header>
            <Form reply>
              <Form.TextArea />
              <Button secondary floated="right">
                Add a comment
              </Button>
            </Form>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default withNavigate(App);
