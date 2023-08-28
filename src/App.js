import './App.css';
import { Message } from './Components/Message';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './Components/context/AccountProvider';
function App() {
  const clientid='814875843110-far88h810rou824n619va82g0qk2rf4o.apps.googleusercontent.com'
  return (
  <AccountProvider>
  <GoogleOAuthProvider clientId={clientid}>
    <Message />
    </GoogleOAuthProvider>
  </AccountProvider>
  

  
  );
}

export default App;
