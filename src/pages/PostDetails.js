import { Link, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";

const PostDetails = () => {
  const posts = useLoaderData();

  return (
    <div>
      <div className="post-details">
        <div>
          <h1>Post Details Page</h1>
        </div>
        <section>
          <h3>Title</h3>
          <p>{posts.title}</p>
        </section>
        <section>
          <h3>Description</h3>
          <p>{posts.body}</p>
        </section>
        <section>
          <h3>Tags</h3>
          <p>
            {posts.tags.map((tag) => (
              <span className="post-details-tag" key={Math.random()}>
                {tag}
              </span>
            ))}
          </p>
        </section>
        <p>
          Go back to the <Link to="/posts">Post page</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;

export const postDetailsLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:4000/posts/${params.id}`);
  return res.json();
};
