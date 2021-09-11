import { FC } from 'react';
import ProfileCard from '../profile-card';

export interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return (
    <div className=''>
      <ProfileCard />
    </div>
  );
};

export default Landing;
