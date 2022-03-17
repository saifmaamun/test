import { InputGroup, ProfileCard } from './Profile.styled';

const Profile = () => {
  return (
    <ProfileCard>
      <form>
        <InputGroup active>
          <div>
            <label htmlFor=''>Name</label>
          </div>
          <div>
            <input type='text' name='' id='' />
          </div>
        </InputGroup>
        <InputGroup active>
          <div>
            <label htmlFor=''>Email Id</label>
          </div>
          <div>
            <input type='text' name='' id='' />
          </div>
        </InputGroup>
        <InputGroup active>
          <div>
            <label htmlFor=''>Phone No</label>
          </div>
          <div className='phoneno'>
            <input type='text' />
            <input type='text' name='' id='' />
          </div>
        </InputGroup>
        <InputGroup>
          <div>
            <label htmlFor=''></label>
          </div>
          <div>
            <button>Save</button>
          </div>
        </InputGroup>
      </form>
    </ProfileCard>
  );
};

export default Profile;
