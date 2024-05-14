import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";

const PostEditForm = () => {
  const postToEdit = useLoaderData();
  const [title, setTitle] = useState(postToEdit.title);
  const [body, setBody] = useState(postToEdit.body);
  const [tags, setTags] = useState(postToEdit.tags);

  const formSubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      body,
      tags: tags.split(","),
    };

    fetch(`http://localhost:4000/posts/${postToEdit.id}`, {
      method: "PATCH",
      "Content-Type": "application/json",
      body: JSON.stringify(post),
    })
      .then((res) => {
        console.log("Post updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="new-post">
        <form onSubmit={(e) => formSubmit(e)}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              rows="8"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tags">
              Tags [NB: Seperate each tag with a comma ( , ) ]
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              required
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Update Post" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PostEditForm;

export const postEditLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:4000/posts/${params.id}`);
  return res.json();
};
