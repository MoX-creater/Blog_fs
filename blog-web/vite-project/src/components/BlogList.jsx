import { Link } from "react-router-dom";

function BlogList({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p><strong>{post.author}</strong></p>
          <p>{post.content.slice(0, 100)}...</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
