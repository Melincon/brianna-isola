import { FC } from 'react';

export interface ProfileCardProps {}

const ProfileCard: FC<ProfileCardProps> = () => {
  return (
    <div className='text-center'>
      <img
        className='block mx-auto rounded-full w-32 h-32'
        src='https://via.placeholder.com/1920x1080.png'
      />
      <h1 className=''>Brianna Isola</h1>
      <h2 className=''>Physics PhD Student</h2>
      <span className=''>brianna.isola@unh.edu</span>
    </div>
  );
};

export default ProfileCard;
