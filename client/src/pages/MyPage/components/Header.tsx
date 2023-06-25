import { useSelector } from 'react-redux';
import { HeaderContainer } from '../style';
import { RootState } from '../../../common/store/RootStore';
import { ReactComponent as Profile } from '../../../common/assets/icons/Profile.svg';

const Header = () => {
  const user = useSelector((state: RootState) => state.userInfo);

  return (
    <HeaderContainer>
      {user.profileImageUrl ? (
        <img src={user.profileImageUrl} alt={user.name} />
      ) : (
        <Profile />
      )}
      <section>
        <h1>{user.name}</h1>
        <div>
          <p>{`Last post creation ${user.createdTime || `doesn't exist`}`}</p>
          <p>{`Last post modification ${
            user.modifiedTime || `doesn't exist`
          }`}</p>
        </div>
      </section>
    </HeaderContainer>
  );
};

export default Header;
