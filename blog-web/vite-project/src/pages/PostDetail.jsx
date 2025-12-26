import { useParams } from "react-router-dom";

function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <h3>By {post.author}</h3>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
