import React, { useState, useContext } from "react";
import { Input, Button, TextArea } from "@nutui/nutui-react";
import { AuthContext } from "../context/AuthContext";
function EditPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(AuthContext);

  const HandlePublish = e => {
    const post = {
      title,
      content,
      author: user?.username || "",
      date: "2022-01-01",
    };
    console.log(post);
  };

  return (
    <div>
      <h2>Edit Post</h2>

      <div className="editArea">
        <label>Title:</label>
        <Input
          type="text"
          placeholder="Please enter title"
          value={title}
          onChange={e => setTitle(e)}
        />
        <label>Content:</label>
        <TextArea
          placeholder="Write your Content here"
          rows={10}
          autoSize
          maxLength={1000}
          value={content}
          style={{ fontSize: "16px" }}
          onChange={e => setContent(e)}
        />
        <Button type="submit" onClick={HandlePublish}>
          Publish
        </Button>
      </div>
    </div>
  );
}

export default EditPost;
