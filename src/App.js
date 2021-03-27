import logo from './logo.svg';
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react"
import './App.css';

Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default withAuthenticator(App);
