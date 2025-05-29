import InfiniteMenu from "./InfiniteMenu";
import ProjectText from "./ProjectText";
import TheCombatGym from "../../assets/project/thecombatgym.png";
import FurryFreinds from "../../assets/project/furryfriends.png";
import MHInteriors from "../../assets/project/mh-interiors.png";
import FAMedia from "../../assets/project/famedia.png";
import Roofing from "../../assets/project/roofing.png";
import FarazKhan from "../../assets/project/farazkhan.png";

const ProjectMain = () => {
  const items = [
    {
      image: MHInteriors,
      link: "https://mh-interiors.in/",
      title: "MH Interiors",
      description:
        "A sleek portfolio website highlighting MH Interiors' design projects with high-quality visuals and an intuitive layout.",
    },
    {
      image: FAMedia,
      link: "https://famedia.co.in/",
      title: "FA Media",
      description:
        "FA Media is a Kolkata-based digital media agency specializing in branding, web development, and digital marketing solutions.",
    },
    {
      image: TheCombatGym,
      link: "https://the-combat-gym.onrender.com/",
      title: "The Combat Gym",
      description:
        "A gym management web app with a secure, password-protected student database and integrated contact system.",
    },
    {
      image: FurryFreinds,
      link: "https://furry-friends-91t1.onrender.com/",
      title: "FurryFriends",
      description:
        "A pet e-commerce platform with OAuth authentication, filters, and intuitive navigation for seamless user experience.",
    },
    {
      image: Roofing,
      link: "https://localroofinghandyman.com/",
      title: "Local Roofing",
      description:
        "A service-based website showcasing roofing and handyman solutions with contact integration and clear service listings for local clients",
    },
    {
      image: FarazKhan,
      link: "https://farazkhan.onrender.com/",
      title: "Faraz Khan",
      description:
        "A personal portfolio website highlighting projects, skills, and contact information with a clean, responsive design.",
    },
  ];
  return (
    <section className="py-20" id="projects">
      <ProjectText />
      <div style={{ height: "600px", position: "relative" }}>
        <InfiniteMenu items={items} />
      </div>
    </section>
  );
};

export default ProjectMain;
