import {  useRequestParams } from '../../hooks';
import { SectionWrapper } from '../shared';

export const WorkExperience = () => {
  const params = useRequestParams();
  return (
    <SectionWrapper title="Work Experience" show={params.work_experience.length > 0 ? true : false}>
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
            {Array.isArray(workExperience.description) ? (
              workExperience.description.map((bulletPoint:any) => (
                <li key={bulletPoint}>{bulletPoint}</li>
              ))
              ) : (
                <li>{workExperience.description}</li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};
