import { useState } from "react";

const NewPostsContent = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [tags, setTags] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      body,
      // tags: tags.split(","),
    };
    if (title.length === 0 || body.length === 0) {
      console.log("all fields are required");
      return;
    }
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(post),
    })
      .then((res) => {
        setTitle("");
        setBody("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
        {/* <div>
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
        </div> */}
        <div>
          <input type="submit" value="Add Post" />
        </div>
      </form>
    </div>
  );
};

export default NewPostsContent;
