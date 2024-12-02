import { skills } from "../utils/data";
import PropTypes from 'prop-types';

const SkillsCard = ({ icon: Icon, title, comment }) => {
  return (
    <div className="bg-pink-600/20 rounded-lg border-pink-400 p-6 h-16 w-26 flex items-center justify-end mb-2">
      <div className="flex justify-between mb-1">
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

const Skills = () => {
  return (
    <section className="w-full px-6 mx-auto pb-20 mt-80" id="skills">
      <div className="rounded-lg border-cyan-800/40 p-2 md:p-4">
        <h2 className="text-3xl text-center font-bold mb-5">Languages & Tools</h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
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

export default Skills;
