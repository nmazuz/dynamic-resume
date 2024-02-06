import { useRequestParams } from '../../hooks';
import { SectionWrapper } from '../shared';

export const Skills = () => {
  const params = useRequestParams();

  return (
    <SectionWrapper title="Skills" show={params.skills ? true : false}>
      <ul className="ml-2">
        {params.skills.soft_skills && params.skills.soft_skills.length > 0 && (
           <li key="softskills">
            <div style={{marginTop: "10px"}}>
              <h3 className="inline-block">
                <span>Soft Skills</span>
              </h3>
            </div>

            {params.skills.soft_skills.map((skill:any, i:any) => (
              <p className="inline-block">
                {i > 0 && (
                  <span className="mx-1">•</span>  
                )}
                <span>{skill}</span>
              </p>
            ))}
          </li>
        )}

        {params.skills.technical_skills && params.skills.technical_skills.length > 0 && (
          <li key="techkills">
            <div style={{marginTop: "10px"}}>
              <h3 className="inline-block">
                <span>Technical Skills</span>
              </h3>
            </div>

            {params.skills.technical_skills.map((skill:any) => (
                <div>
                  <h4 className="inline-block">
                    <span style={{marginRight: "10px", textDecoration: "underline"}} >{skill.category}: </span>
                  </h4>              
                  {skill.skills_list.map((skillName:any, i:any) => (
                    <p className="inline-block">
                      {i > 0 && (
                        <span className="mr-1">,</span>  
                      )}
                      <span>{skillName}</span>
                    </p>
                  ))}
                </div>
            ))}
          </li>
        )}
      </ul>
            
    </SectionWrapper>
  );
};
