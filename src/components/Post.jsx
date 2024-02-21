import Reply from "./Reply";
import { useContext } from "react";
import randomColor from "randomcolor";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Avatar, Button } from "@nutui/nutui-react";
import { useParams } from "react-router-dom";
const Post = () => {
  const { id: post } = useParams();
  const data = JSON.parse(post);
  const Navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleReply = () => {
    !user ? Navigate("/login") : Navigate(`/editReply`);
  };
  return (
    <div className="post-details">
      <div className="post-info">
        <Avatar
          size="small"
          color={randomColor(undefined, "dark")}
          background={randomColor("blue", "light")}>
          {data.author.charAt(0)}
        </Avatar>
        <div className="author">{data.author}</div>
        <span className="date">{data.date}</span>
      </div>
      <h2>{data.title}</h2>
      <div className="content">{data.content}</div>
      <Button size="small" type="info" onClick={handleReply}>
        Reply
      </Button>
      <div className="replys">
        {data.replys.map((reply, index) => (
          <Reply data={reply} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Post;
