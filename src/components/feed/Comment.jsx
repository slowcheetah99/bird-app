import { FaRegComment as Comments } from "react-icons/fa";
import { FiRefreshCw as Refresh } from "react-icons/fi";
import { BsUpload as Upload } from "react-icons/bs";
import { GiMoebiusTriangle as Tip } from "react-icons/gi";
import { AiOutlineHeart as Heart } from "react-icons/ai";
import { TweetContainer } from "../../styles/FeedStyles";
import { formatDistanceToNow } from "date-fns";
export default function Comment({ comment, dispatch }) {
  return (
    <TweetContainer to="/">
      <div className="tweet-header">
        <div className="user-profile">
          <img
            src={`${comment.image}`}
            alt={`${comment.username}'s post`}
            className="user-image"
          />
        </div>
        <div className="user-meta">
          <h4>{comment.name}</h4>
          <span>@{comment.username.toLowerCase()}</span>
          <span>{formatDistanceToNow(comment.time)}</span>
        </div>
      </div>
      <p className="tweet-body">{comment.body}</p>
      <div className="tweet-meta">
        <div>
          <Comments />
          <span>{Math.floor(Math.random() * 300)}</span>
        </div>
        <div>
          <Refresh />
          <span>{comment.retweets}</span>
        </div>
        <div>
          <Heart />
          <span>{comment.likes}</span>
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
