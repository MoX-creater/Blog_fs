import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogForm({ setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      content,
      author
    };

    setPosts(prev => [...prev, newPost]);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} required />
      <input placeholder="Author" onChange={e => setAuthor(e.target.value)} required />
      <textarea placeholder="Content" onChange={e => setContent(e.target.value)} required />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default BlogForm;
