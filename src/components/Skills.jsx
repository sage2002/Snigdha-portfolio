import { content } from "../Content";
const Skills = () => {
  const { skills } = content;

  return <section className="min-h-screen bg-bg_light_primary">
    <div className="container py-14">
      <h2 className="">{skill.title}</h2>
      <h4>
        {skills.subtitle}</h4>

    </div>
  </section>;
};

export default Skills;
