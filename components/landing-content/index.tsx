import { FC } from 'react';
import LandingContentSection from '../landing-content-section';

export interface LandingContentProps {}

const LandingContent: FC<LandingContentProps> = () => {
  return (
    <div className='block mx-12 mt-6 md:mt-0'>
      <LandingContentSection />
      <LandingContentSection />
      <LandingContentSection />
    </div>
  );
};

export default LandingContent;
