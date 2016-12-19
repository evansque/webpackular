const UserFactory = () => {
  const user = {};

  const getUser = () => user;

  const isSignedIn = () => user.isSignedIn;

  return {
    getUser: getUser,
    isSignedIn: isSignedIn
  };
};

export default UserFactory;
