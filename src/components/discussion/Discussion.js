import react, { Component } from "react";
import { Form, Button, Comment } from "semantic-ui-react";
import { FaPepperHot } from "react-icons/fa";
import React, { useState } from "react";

export default function Discuss() {
  const [reply, setReply] = useState(false);

 

  return (
    <React.Fragment>
      <h2 style={{ color: "burlywood" }}>
        Our Community{" "}
        <FaPepperHot icon="fa-regular fa-pepper-hot" color="green" />
      </h2>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author>Adam</Comment.Author>
            {/* <Comment.Metadata><div>Today 5.34pm</div></Comment.Metadata>  */}
            <Comment.Text> Good work </Comment.Text>
            <Comment.Actions>
              <Comment.Action onClick={()=>setReply(!reply)}>
                Reply
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        {reply?<ReplyBox/>:null}

      </Comment.Group>
    </React.Fragment>
  );
}

function  ReplyBox() {
    return (<Form reply>
          <Form.TextArea />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
    );
    
}
