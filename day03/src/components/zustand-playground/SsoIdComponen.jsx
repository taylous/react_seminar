import userStore from '../../zustand-store/userStore';

const SsoIdComponent = () => {
  const user = userStore();

  console.log('[rendering] SsoIdComponent');

  return <div>SSO ID: {user.ssoId}</div>;
};

export default SsoIdComponent;
