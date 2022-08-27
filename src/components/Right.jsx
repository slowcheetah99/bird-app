import {
  RightWrapper,
  Search,
  Headline,
  Trending,
  RightFooter,
} from "../styles/RightStyles";
import Post from "./Post";
import { RiMailAddLine as SendMessage } from "react-icons/ri";
import { BsChevronDoubleUp as Up } from "react-icons/bs";
export default function Right({ post }) {
  const trends = [
    {
      category: "Entertainment",
      title: "Lorem ipsum dolor sit.",
      meta: "1.3k",
    },

    {
      category: "Sports",
      title: "Lorem ipsum dolor sit.",
      meta: "12k",
    },

    {
      category: "Breaking News",
      title: "Lorem ipsum dolor sit.",
      meta: "1865",
    },

    {
      category: "Lifestyle",
      title: "Lorem ipsum dolor sit.",
      meta: "9.6k",
    },
  ];
  return (
    <RightWrapper>
      <Search>
        <input type="search" placeholder="Search Twitter" />
      </Search>
      {post && (
        <Headline>
          <h3>Relevant People</h3>
          <div className="meta">
            <div className="profile">
              <div className="profile--img">
                <img src={`${post.image}`} alt={`${post.username}'s profile`} />
              </div>
              <div className="meta-text">
                <h4>{post.name}</h4>
                <p>@{post.username}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <p className="post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            inventore?
          </p>
          <p className="post-blue">@vercel.</p>
        </Headline>
      )}
      <Trending>
        {trends.map((trend) => (
          <Post key={trend.meta} post={trend} />
        ))}
      </Trending>
      <RightFooter>
        <h3>Messages</h3>
        <div>
          <SendMessage />
          <Up />
        </div>
      </RightFooter>
    </RightWrapper>
  );
}
