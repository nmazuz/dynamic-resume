import { useCallback } from 'react';
import { useRequestParams } from '../../hooks';
import { SectionWrapper } from '../shared/SectionWrapper';

export const Languages = () => {
  const params = useRequestParams();

  console.log(params.languages);
  return (
      <SectionWrapper title="Languages" show={params.languages.length > 0 ? true : false}>
        {params.languages.map((item: any, index: any) => {
          const [key, value] = Object.entries(item)[0] as [string, string];
          return (
            <div key={index} className="inline-block mr-1">
              <h4 className="inline-block">
                <span className="mr-1 upper underline">{key}: </span>
              </h4>  
              <span>{value}</span>
            </div>
          );
        })}
    </SectionWrapper>
  );
};
