export default function Post({ post }) {
  return (
    <div className="post">
      <div className="post-text">
        <span>{post.category}</span>.<span>Trending</span>
        <h4>{post.title}</h4>
        <p>{post.meta} Tweets</p>
      </div>
    </div>
  );
}
