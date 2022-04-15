import axios from "axios";
import React from "react";

const baseURL = "https://reqres.in/api/users";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios.put(`${baseURL}/1`, {
        name: "Umair!",
        job: "Developer."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No Name and job!"

  return (
    <div>
      <h1>{post.name}</h1>
      <p>{post.job}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}