import {
  CenterWrapper,
  CenterHeader,
  CenterBody,
  Meta,
  Post,
  PostMeta,
} from "../styles/CenterStyles";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AiOutlineArrowLeft as Left,
  AiOutlineHeart as Heart,
} from "react-icons/ai";
import { FaRegComment as Comments } from "react-icons/fa";
import { FiRefreshCw as Refresh } from "react-icons/fi";
import { BsUpload as Upload } from "react-icons/bs";
import { format } from "date-fns";
import Comment from "./feed/Comment";
export default function Center({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [clicked, setClicked] = useState(false);

  const handleLiked = () => {
    if (clicked) {
      setIsLiked((state) => !state);
      setLikes((prevLikes) => prevLikes - 1);
      setClicked((state) => !state);
      return;
    }
    setLikes((prevLikes) => prevLikes + 1);
    setIsLiked((state) => !state);
    setClicked(true);
  };

  const handleDoubleClick = () => {
    setLikes((prevLikes) => prevLikes - 1);
    setIsLiked((state) => !state);
  };
  return (
    <CenterWrapper>
      <CenterHeader>
        <Link to="/">
          <Left />
          <h3>Thread</h3>
        </Link>
      </CenterHeader>
      <CenterBody style={{ marginBottom: "8rem" }}>
        <Meta>
          <div className="profile">
            <div>
              <img src={`${post.image}`} alt="user profile" />
            </div>
            <div>
              <h5>{post.name}</h5>
              <p>@{post.username}</p>
            </div>
          </div>
          <div className="more">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Meta>
        <Post>
          <p>{post.post}</p>
          <div className="post-image">
            <img src={`${post.image}`} alt="post image" />
          </div>
          <PostMeta>
            <div className="post-info--internal">
              <span>{format(post.time, "p")}</span>
              <span>.</span>
              <span>{format(post.time, "PP")}</span>
              <span>.</span>
              <span>Twitter Web App</span>
            </div>
            <div className="post-info--external">
              <span>
                <strong>{post.retweets}</strong>Retweets
              </span>
              <span>
                <strong>{Math.floor(post.retweets / 2)}</strong>Quote Tweets
              </span>
              <span>
                <strong>{likes}</strong>likes
              </span>
            </div>
            <div className="post-info-icons">
              <div>
                <Comments />
                <span>{post.comments.length}</span>
              </div>
              <div>
                <Refresh />
                <span>{post.retweets}</span>
              </div>
              <div>
                <Heart
                  onClick={handleLiked}
                  className={isLiked ? "liked" : ""}
                  onDoubleClick={handleDoubleClick}
                />
                <span>{likes}</span>
              </div>
              <Upload />
            </div>
          </PostMeta>
        </Post>
      </CenterBody>
      {post.comments.map((comment) => (
        <Comment key={comment.commentId} comment={comment} />
      ))}
    </CenterWrapper>
  );
}
