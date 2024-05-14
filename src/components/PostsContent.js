import { useEffect, useState, useRef } from "react";
import PostsContentCard from "./PostsContentCard";

const PostsContent = () => {
  const [posts, setPosts] = useState(null);
  let initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      fetch("http://localhost:4000/posts/")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    initialized.current = true;
  }, [posts]);
  return (
    <div className="posts-content">
      <section className="posts-content-sec">
        {posts &&
          posts.map((post) => (
            <PostsContentCard title={post.title} id={post.id} key={post.id} />
          ))}
      </section>
    </div>
  );
};

export default PostsContent;
