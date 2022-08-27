import { HiOutlineSparkles as Sparkles } from "react-icons/hi";
import { Profile, TweetWrapper, TweetSubmit } from "../../styles/FeedStyles";
import { BiMap as Map, BiPoll as Poll } from "react-icons/bi";
import {
  AiOutlineFileGif as Gif,
  AiOutlinePicture as Picture,
} from "react-icons/ai";
import { GrEmoji as Emoji, GrSchedulePlay as Schedule } from "react-icons/gr";
import Tweet from "./Tweet";
import { useBirdContext } from "../../helpers/hooks/useBirdContext";

export default function ComposeTweet() {
  const { posts, dispatch, user } = useBirdContext();
  console.log(user);
  return (
    <TweetWrapper>
      <div className="header">
        <h3>Home</h3>
        <Sparkles />
      </div>
      <div className="tweet">
        <Profile>
          <img src={`${user.image}`} alt="profile image" />
        </Profile>
        <input type="text" placeholder="What's happening?" />
      </div>
      <div className="tweet-icons">
        <div className="icons">
          <Picture />
          <Gif />
          <Poll />
          <Emoji />
          <Schedule className="schedule" />
          <Map />
        </div>
        <div className="tweet-submit">
          <TweetSubmit>Tweet</TweetSubmit>
        </div>
      </div>
      {posts.map((post) => (
        <Tweet
          key={post.postId}
          post={post}
          dispatch={dispatch}
          posts={posts}
        />
      ))}
    </TweetWrapper>
  );
}
