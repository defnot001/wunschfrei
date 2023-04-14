import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import Profile from './components/Profile';

function App() {
  return (
    <div className="w-screen h-screen">
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
