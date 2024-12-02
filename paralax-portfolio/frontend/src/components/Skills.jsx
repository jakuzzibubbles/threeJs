import { skills } from "../utils/data";
import PropTypes from 'prop-types';



const Skills = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto pb-20" id="skills">
      <div className="p-4 md:p-8">
        <h2 className="text-3xl text-center mb-5">Languages & Tools</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white">
          {skills.map((skill) => (
            <SkillsCard
              key={skill.id}
              icon={skill.icon}
              iconProps={skill.iconProps}
              title={skill.title}
              comment={skill.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsCard = ({ icon: Icon, title, comment }) => {
  return (
    <div className="bg-pink-600/60 rounded-border border-pink-400 p-5 rounded-lg border-pink-400">
      <div className="flex items-center justify-between mb-5">
        <p className="text-base">{title}</p>
        <Icon className="text-black text-3xl mr-4" />
      </div>

      <p className="text-xs font-light leading-5 opacity-80">{comment}</p>
    </div>
  );
};

SkillsCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Skills;
