import { FC } from 'react';
import ProfileCard from '../profile-card';
import LandingContent from '../landing-content';

export interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return (
    <div className='md:flex'>
      <ProfileCard />
      <LandingContent />
    </div>
  );
};

export default Landing;
