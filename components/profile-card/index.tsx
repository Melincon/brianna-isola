import { FC } from 'react';
import SocialNav from '../social-nav';

export interface ProfileCardProps {}

const ProfileCard: FC<ProfileCardProps> = () => {
  return (
    <div className='text-center'>
      <img
        className='block mx-auto rounded-full w-48 h-48 mb-6'
        src='https://via.placeholder.com/1920x1080.png'
      />
      <h1 className='block text-4xl'>Brianna Isola</h1>
      <h2 className='block text-xl mb-3'>Physics PhD Student</h2>
      <div className='border-b w-40 block mx-auto mb-9' />
      <span className='block mb-3'>brianna.isola@unh.edu</span>
      <SocialNav />
      <div className=' border-b w-72 block mx-auto mt-3' />
    </div>
  );
};

export default ProfileCard;
