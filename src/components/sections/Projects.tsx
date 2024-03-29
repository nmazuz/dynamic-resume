import {useRequestParams } from '../../hooks';

import { SectionWrapper } from '../shared';

export const Projects = () => {
  const params = useRequestParams();

  return (
    <SectionWrapper title="Projects" show={params.projects.length > 0 ? true : false}>
      <ul className="ml-2">
        {params.projects.map((project: any, i: any) => (
          <li key={project.project} className={i % 2 ? `mt-1` : `mt-half`}>
            <div className="flex">
              <h3>
                {project.name}
              </h3>
            </div>
            <p>
              { project.description}
            </p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};
