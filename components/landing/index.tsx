import { FC } from 'react';
import ProfileCard from '../profile-card';
import LandingContent from '../landing-content';
import { PersonInterface } from '../../lib/contentful/interfaces';

export interface LandingProps {
  person: PersonInterface;
}

const Landing: FC<LandingProps> = ({ person }) => {
  return (
    <div className='md:flex'>
      <ProfileCard person={person} />
      <LandingContent />
    </div>
  );
};

export default Landing;
