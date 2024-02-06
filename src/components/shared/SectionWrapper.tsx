import { PropsWithChildren } from 'react';

interface SectionWrapperProps extends PropsWithChildren {
  title: string;
  show: boolean;
}

export const SectionWrapper = ({ children, title, show }: SectionWrapperProps) => (
  <>
  { show && (
    <>
    <h2 className="mt-1">{title}</h2>
    <hr className="border-solid border-1" />

    <div className="mt-half">{children}</div>
    </>
  )
  }
  </>
);
