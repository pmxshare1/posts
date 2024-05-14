import Image from "./Image";
import profile from "../assets/images/profile.jpg";
const SideContent = () => {
  return (
    <div className="side-content">
      <div className="side-profile-image">
        <Image src={profile} alt="Profile Picture" />
      </div>
      <div>
        <h2>Summary </h2>
        <p>
          Organized and self-motivated software developer with 15+ years
          professional experience.
        </p>
        <p>
          Fluent in .Net C#, SQL, Python, Django, Node JS, Electron JS,
          JavaScript, HTML, CSS, React JS and Next JS programming languages.
        </p>
        <p>
          Possess practical working knowledge of relational databases using
          PostgreSQL, SQL Server, SQLite and MySQL.
        </p>
        <p>
          Constantly updating personal and professional technical skills with
          complementary collegiate courses and online bootcamps. Reliable and
          responsible team player.
        </p>
      </div>
    </div>
  );
};

export default SideContent;
