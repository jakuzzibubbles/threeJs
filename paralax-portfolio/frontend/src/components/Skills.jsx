import { skills } from "../utils/data";
import PropTypes from 'prop-types';

const SkillsCard = ({ icon: Icon, title, comment }) => {
  return (
    <div className="bg-slate-900 rounded-full border border-cyan-400 h-16 w-16 flex items-center justify-center">
      <div className="flex items-center justify-between mb-1">
        <p className="text-base">{title}</p>
        <Icon className="text-white text-3xl" />
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
    <section className="w-full px-6 mx-auto pb-20" id="skills">
      <div className="rounded-lg border border-cyan-800/40 p-2 md:p-4">
        <h5 className="text-xl text-gray-700 hover:underline font-semibold font-medium mb-5">
          Languages & Tools
        </h5>

        <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-9 gap-8">
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
