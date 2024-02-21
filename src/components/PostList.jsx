import { Avatar, Badge, ConfigProvider } from "@nutui/nutui-react";
import randomColor from "randomcolor";
import { useNavigate } from "react-router-dom";

const badgeStyle = {
  nutuiBadgeWidth: "0.875rem",
  nutuiBadgeHeight: "0.875rem",
  nutuiBadgePadding: "0.125rem",
  nutuiBadgeBorderRadius: "0.125rem",
  nutuiBadgeColor: "#667f99",
  nutuiBadgeBackgroundColor: "#e4edf6",
};
const PostList = ({ postsData }) => {
  const Navigate = useNavigate();

  const handleClicked = post => {
    // jump to the post page and pass the id as a parameter
    Navigate(`/post/${JSON.stringify(post)}`);
  };

  const ListCard = ({ post }) => {
    return (
      <div className="post" onClick={() => handleClicked(post)}>
        <Avatar
          color={randomColor(undefined, "dark")}
          background={randomColor("blue", "light")}>
          {post.author.charAt(0)}
        </Avatar>
        <ConfigProvider theme={badgeStyle}>
          <Badge value={post.replys.length} top="28" right="5">
            <div className="content">
              <div className="post-title">{post.title}</div>
              <div className="post-info">
                <span className="author"> {post.author}</span>
                <span> {post.date}</span>
              </div>
            </div>
          </Badge>
        </ConfigProvider>
      </div>
    );
  };

  return (
    <div>
      {postsData.map((data, index) => (
        <ListCard key={index} post={data}></ListCard>
      ))}
    </div>
  );
};
export default PostList;
