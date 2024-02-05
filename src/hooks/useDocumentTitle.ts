import { useEffect } from 'react';
import { useRequestParams } from './useConfig';

export const useDocumentTitle = () => {
  const config = useRequestParams();

  useEffect(() => {
    document.title = config.contact.full_name + ' Resume';
  }, []);
};
