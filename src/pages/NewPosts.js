import Footer from "../components/Footer";
import NewPostsContent from "../components/NewPostsContent";
import SideContent from "../components/SideContent";

const NewPosts = () => {
  return (
    <div>
      <section className="page-title">
        <h1>Create a New Post</h1>
      </section>
      <section className="page-content">
        <SideContent />
        <NewPostsContent />
      </section>
      <Footer />
    </div>
  );
};

export default NewPosts;
