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
      { title: "JavaScript", color: "#F7DF1E", emoji: "🔥" },
      { title: "React", color: "#61DAFB", emoji: "⚛️" },
      { title: "Node.js", color: "#339933", emoji: "🚀" },
      { title: "MongoDB", color: "#47A248", emoji: "🍃" },
    ],
  },
  {
    name: "Priya Sharma",
    description:
      "DevOps engineer focusing on cloud infrastructure and CI/CD pipelines. AWS certified with experience in containerization and automation.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    techSkills: [
      { title: "Docker", color: "#2496ED", emoji: "🐳" },
      { title: "Kubernetes", color: "#326CE5", emoji: "⎈" },
      { title: "AWS", color: "#FF9900", emoji: "☁️" },
      { title: "Terraform", color: "#7B42BC", emoji: "🏗️" },
    ],
  },
  {
    name: "Marcus Johnson",
    description:
      "Data scientist with expertise in machine learning algorithms and predictive modeling. Background in mathematics and statistics.",
    imageUrl: "https://randomuser.me/api/portraits/men/64.jpg",
    techSkills: [
      { title: "Python", color: "#3776AB", emoji: "🐍" },
      { title: "TensorFlow", color: "#FF6F00", emoji: "🧠" },
      { title: "SQL", color: "#4479A1", emoji: "📊" },
      { title: "R", color: "#276DC3", emoji: "📈" },
    ],
  },
  {
    name: "Sofia Rodriguez",
    description:
      "UX/UI designer with a keen eye for aesthetics and user experience. Combines creativity with technical knowledge to build intuitive interfaces.",
    imageUrl: "https://randomuser.me/api/portraits/women/29.jpg",
    techSkills: [
      { title: "Figma", color: "#F24E1E", emoji: "🎨" },
      { title: "HTML/CSS", color: "#E34F26", emoji: "🌐" },
      { title: "Adobe XD", color: "#FF61F6", emoji: "✏️" },
      { title: "Sketch", color: "#F7B500", emoji: "💎" },
    ],
  },
  {
    name: "Jamal Williams",
    description:
      "Security specialist focused on application security and penetration testing. Advocate for privacy-by-design principles in software development.",
    imageUrl: "https://randomuser.me/api/portraits/men/79.jpg",
    techSkills: [
      { title: "Cybersecurity", color: "#FF5733", emoji: "🔒" },
      { title: "Ethical Hacking", color: "#4CAF50", emoji: "🕵️" },
      { title: "Linux", color: "#FCC624", emoji: "🐧" },
      { title: "Cryptography", color: "#607D8B", emoji: "🔐" },
    ],
  },
];

function App() {
  return profiles.map((profile) => (
    <Profile
      key={profile.name}
      name={profile.name}
      photoName={profile.imageUrl}
      description={profile.description}
      techSkills={profile.techSkills}
    ></Profile>
  ));
}

function Profile(props) {
  return (
    <div className="card">
      <Avatar name={props.name} imageUrl={props.photoName} />
      <div className="data">
        <Intro description={props.description} name={props.name} />
        <SkillList techSkills={props.techSkills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.imageUrl} alt={props.name}></img>;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}
function SkillList(props) {
  return (
    <div className="skillList">
      {<Skills techSkills={props.techSkills}></Skills>}
    </div>
  );
}

function Skills(props) {
  return props.techSkills.map((skill) => (
    <Skill
      key={skill.title}
      title={skill.title}
      emoji={skill.emoji}
      color={skill.color}
    ></Skill>
  ));
}

function Skill(props) {
  const skillStyle = { backgroundColor: props.color };
  return (
    <div className="skill" style={skillStyle}>
      <span> {props.title}</span>
      <span> {props.emoji}</span>
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
