import { InputGroup, ProfileCard } from './Profile.styled';

const ChangePassword = () => {
  return (
    <ProfileCard>
      <form>
        <InputGroup active>
          <div>
            <label htmlFor=''>Enter your Email</label>
          </div>
          <div>
            <input type='text' name='' id='' />
          </div>
        </InputGroup>
        <InputGroup>
          <div>
            <label htmlFor=''>Enter new Password</label>
          </div>
          <div>
            <input type='text' name='' id='' />
          </div>
        </InputGroup>
        <InputGroup>
          <div>
            <label htmlFor=''>Confirm new Password</label>
          </div>
          <div>
            <input type='text' name='' id='' />
          </div>
        </InputGroup>
        <InputGroup>
          <div>
            <label htmlFor=''></label>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </InputGroup>
      </form>
    </ProfileCard>
  );
};

export default ChangePassword;
