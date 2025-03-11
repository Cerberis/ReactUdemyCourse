import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const profiles = [
  {
    name: "Alex Chen",
    description:
      "Full-stack developer with 7 years of experience specializing in React and Node.js. Passionate about clean code and user-centered design.",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    techSkills: [
      { title: "JavaScript", color: "#F7DF1E", level: "beginner" },
      { title: "React", color: "#61DAFB", level: "beginner" },
      { title: "Node.js", color: "#339933", level: "medium" },
      { title: "MongoDB", color: "#47A248", level: "experienced" },
    ],
  },
  {
    name: "Priya Sharma",
    description:
      "DevOps engineer focusing on cloud infrastructure and CI/CD pipelines. AWS certified with experience in containerization and automation.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    techSkills: [
      { title: "Docker", color: "#2496ED", level: "experienced" },
      { title: "Kubernetes", color: "#326CE5", level: "medium" },
      { title: "AWS", color: "#FF9900", level: "experienced" },
      { title: "Terraform", color: "#7B42BC", level: "medium" },
    ],
  },
  {
    name: "Marcus Johnson",
    description:
      "Data scientist with expertise in machine learning algorithms and predictive modeling. Background in mathematics and statistics.",
    imageUrl: "https://randomuser.me/api/portraits/men/64.jpg",
    techSkills: [
      { title: "Python", color: "#3776AB", level: "experienced" },
      { title: "TensorFlow", color: "#FF6F00", level: "medium" },
      { title: "SQL", color: "#4479A1", level: "experienced" },
      { title: "R", color: "#276DC3", level: "medium" },
    ],
  },
  {
    name: "Sofia Rodriguez",
    description:
      "UX/UI designer with a keen eye for aesthetics and user experience. Combines creativity with technical knowledge to build intuitive interfaces.",
    imageUrl: "https://randomuser.me/api/portraits/women/29.jpg",
    techSkills: [
      { title: "Figma", color: "#F24E1E", level: "experienced" },
      { title: "HTML/CSS", color: "#E34F26", level: "experienced" },
      { title: "Adobe XD", color: "#FF61F6", level: "medium" },
      { title: "Sketch", color: "#F7B500", level: "medium" },
    ],
  },
  {
    name: "Jamal Williams",
    description:
      "Security specialist focused on application security and penetration testing. Advocate for privacy-by-design principles in software development.",
    imageUrl: "https://randomuser.me/api/portraits/men/79.jpg",
    techSkills: [
      { title: "Cybersecurity", color: "#FF5733", level: "experienced" },
      { title: "Ethical Hacking", color: "#4CAF50", level: "experienced" },
      { title: "Linux", color: "#FCC624", level: "medium" },
      { title: "Cryptography", color: "#607D8B", level: "medium" },
    ],
  },
];

function App() {
  return profiles.map((profile) => (
    <Profile key={profile.name} profile={profile}></Profile>
  ));
}

function Profile({ profile }) {
  return (
    <div className="card">
      <Avatar imageUrl={profile.imageUrl} name={profile.name} />
      <div className="data">
        <Intro name={profile.name} description={profile.description} />
        <SkillList techSkills={profile.techSkills} />
      </div>
    </div>
  );
}

function Avatar({ imageUrl, name }) {
  return <img className="avatar" src={imageUrl} alt={name}></img>;
}

function Intro({ name, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

function SkillList({ techSkills }) {
  return (
    <div className="skill-list">
      <Skills techSkills={techSkills}></Skills>
    </div>
  );
}

function Skills({ techSkills }) {
  return techSkills.map((skill) => (
    <Skill
      key={skill.title}
      title={skill.title}
      level={skill.level}
      color={skill.color}
    ></Skill>
  ));
}

function Skill(props) {
  const skillStyle = { backgroundColor: props.color };
  const emoji = buildEmoji({ level: props.level });
  return (
    <div className="skill" style={skillStyle}>
      <span>{props.title}</span>
      <span>{emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

function buildEmoji({ level }) {
  return (() => {
    switch (level) {
      case "beginner":
        return "👶";
      case "medium":
        return "💪";
      case "experienced":
        return "🎓";
      default:
        return "❔";
    }
  })();
}
