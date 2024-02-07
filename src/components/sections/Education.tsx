import {useRequestParams } from '../../hooks';

import { SectionWrapper } from '../shared';

export const Education = () => {
  const params = useRequestParams();
  //console.log(params);

  return (
    <SectionWrapper title="Education" show={params.education.length > 0 ? true : false}>
      <ul className="ml-2">
        {params.education.map((education: any, i: any) => (
          <li key={education.university} className={i % 2 ? `mt-1` : `mt-half`}>
            <div className="flex">
              <h3>
                {education.university}
              </h3>
              <span className="ml-auto text-muted">{education.year}</span>
            </div>
            <h4>
              {education.classification}
            </h4>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};
