import { useRequestParams } from '../../hooks';
import { SectionWrapper } from '../shared';

export const Summary = () => {
  const params = useRequestParams();

  return (
    <SectionWrapper title="Summary" show={params.summery != "" ? true : false}>
      <p>{params.summary}</p>
    </SectionWrapper>
  );
};
