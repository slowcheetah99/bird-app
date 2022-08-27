import { FaRegComment as Comments } from "react-icons/fa";
import { FiRefreshCw as Refresh } from "react-icons/fi";
import { BsUpload as Upload } from "react-icons/bs";
import { GiMoebiusTriangle as Tip } from "react-icons/gi";
import { AiOutlineHeart as Heart } from "react-icons/ai";
import { TweetContainer } from "../../styles/FeedStyles";
import { formatDistanceToNow } from "date-fns";
import Comment from "./Comment";
export default function Tweet({ posts, post, dispatch }) {
  const getPost = (id) => {
    if (posts) {
      const current = posts.filter((post) => post.postId === id);
      dispatch({
        type: "GET_POST",
        payload: current,
      });
    }
  };
  return (
    <TweetContainer
      to={`/posts/${post.postId}`}
      onClick={() => getPost(post.postId)}
    >
      <div className="tweet-header">
        <div className="user-profile">
          <img
            src={`${post.image}`}
            alt={`${post.userName}'s post`}
            className="user-image"
          />
        </div>
        <div className="user-meta">
          <h4>{post.name}</h4>
          <span>@{post.username.toLowerCase()}</span>
          <span>{formatDistanceToNow(post.time)}</span>
        </div>
      </div>
      <p className="tweet-body">{post.post}</p>
      <div className="tweet-meta">
        <div>
          <Comments />
          <span>{post.comments.length}</span>
        </div>
        <div>
          <Refresh />
          <span>{post.retweets}</span>
        </div>
        <div>
          <Heart />
          <span>{post.likes}</span>
        </div>
        <div>
          <Upload />
        </div>
        <div className="tip">
          <Tip />
          <span>Tip</span>
        </div>
      </div>
    </TweetContainer>
  );
}
