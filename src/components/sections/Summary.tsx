import { useRequestParams } from '../../hooks';
import { SectionWrapper } from '../shared';

export const Summary = () => {
  const params = useRequestParams();
console.log(params);
  return (
    <SectionWrapper title="Summary" show={params.summary != "" ? true : false}>
      <p>{params.summary}</p>
    </SectionWrapper>
  );
};
