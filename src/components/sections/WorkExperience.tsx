import {  useRequestParams } from '../../hooks';
import { SectionWrapper } from '../shared';

export const WorkExperience = () => {
  const params = useRequestParams();

  return (
    <SectionWrapper title="Work Experience">
      <ul className="ml-2">
        {params.work_experience.map((workExperience:any, i:any) => (
          <li key={workExperience.company} className={i % 2 ? `mt-1` : `mt-half`}>
            <div className="flex">
              <h3>
                {workExperience.company}
              </h3>
              <span className="ml-auto text-muted">{workExperience.period}</span>
            </div>
            <h4>{workExperience.role}</h4>
            <ul className="ml-3">
              {workExperience.description.map((bulletPoint:any) => (
                <li key={bulletPoint}>{bulletPoint}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};
