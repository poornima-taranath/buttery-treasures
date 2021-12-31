import React from "react";
import { FaHeart } from "react-icons/fa";
import { Button, Container, Header, Form } from "semantic-ui-react";
import withNavigate from "./withNavigate";
import { Bounce } from "../../App";

function Home(props) {
  let { notFound } = props;


  return (
    <div className="home">
      <Bounce>
        <FaHeart
          style={{
            color: "red",
            fontSize: "25px",
            display: "flex",
            justifyContent: "center",
          }} />
      </Bounce>
      <div style={{ flex: 2 }}>
        Welcome to Buttery Treasures! Here, we offer you variety of food
        delicacies that you can easily make at your home
        {notFound ? <ul>Sorry! This is not available with us :(</ul> : <Instructions {...props} />}
      </div>
      <CommentBox />
    </div>
  );
};


function Instructions(props) {
  return props.meal.map((sen) => (
    <div className="instruct">
      <br></br>
      <p style={{ fontWeight: "bold", color: "blueviolet" }}>
        {sen.strMeal}
      </p>
      <br></br> Instructions<br></br>
      {sen.strInstructions}
      <br></br>
      <br></br>
      <br></br>
    </div>
  ));
}
function CommentBox(props) {
  return <Container className="comment-box">
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
  </Container>;
}

export default withNavigate(Home);
