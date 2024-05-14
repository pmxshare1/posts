import Footer from "../components/Footer";
import PostsContent from "../components/PostsContent";
import SideContent from "../components/SideContent";

const Posts = () => {
  return (
    <div>
      <section className="page-title">
        <h1>Posts</h1>
      </section>
      <section className="page-content">
        <SideContent />
        <PostsContent />
      </section>
      <Footer />
    </div>
  );
};

export default Posts;
