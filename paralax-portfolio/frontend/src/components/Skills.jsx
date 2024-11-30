import { skills } from "../utils/data";
import PropTypes from 'prop-types';

const SkillsCard = ({ icon: Icon, title, comment }) => {
  return (
    <div className="bg-slate-900 rounded-border border-cyan-400 p-3">
      <div className="flex items-center justify-between mb-3">
        <p className="text-base">{title}</p>
        <Icon className="text-white text-4xl" />
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
    <section className="max-w-screen-xl px-6 mx-auto pb-20" id="skills">
      <div className="rounded-lg border border-cyan-800/40 p-4 md:p-8">
        <h5 className="text-xl text-gray-700 hover:underline font-semibold font-medium mb-5">
          Skills
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
