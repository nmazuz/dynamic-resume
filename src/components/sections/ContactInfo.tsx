import { useCallback } from 'react';
import { useRequestParams } from '../../hooks';

export const ContactInfo = () => {
  const params = useRequestParams();

  console.log("params: ",params)

  const cleanLink = useCallback((link: string) => {
    return link.replace(/^https?:\/\//, '').replace(/^www\./, '');
  }, []);

  return (
    <div className="text-center">
      <h1>{params.contact.full_name}</h1>

      <h2>{params.contact.headline}</h2>

      <a href={`mailto:${params.contact.email}`}>{params.contact.email}</a>

      {params.contact.linkedin_url && (
        <>
          <span className="mx-1">•</span>
          <a href={params.contact.linkedin_url}>{cleanLink(params.contact.linkedin_url)}</a>
        </>
      )}
    </div>
  );
};
