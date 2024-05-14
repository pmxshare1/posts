import { Link } from "react-router-dom";
import { FcFullTrash } from "react-icons/fc";
import { BiEditAlt } from "react-icons/bi";

const PostsContentCard = (props) => {
  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="posts-content-card">
      <Link to={props.id.toString()}>
        <div>
          <p>{props.title}</p>
        </div>
      </Link>
      <div>
        <Link to={`edit/${props.id}`}>
          <BiEditAlt />
        </Link>

        <FcFullTrash onClick={handleDelete} />
      </div>
    </div>
  );
};

export default PostsContentCard;
