import BlogList from "../components/BlogList";
import { Link } from "react-router-dom";

function Home({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <Link to="/create">Create New Post</Link>
      <BlogList posts={posts} />
    </div>
  );
}

export default Home;
