import Footer from "../components/Footer";
import RightContent from "../components/RightContent";
import SideContent from "../components/SideContent";

const Home = () => {
  return (
    <div>
      <section className="page-title">
        <h1>Home Page</h1>
      </section>
      <section className="page-content">
        <SideContent />
        <RightContent />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
