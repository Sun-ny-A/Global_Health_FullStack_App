import { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';
import Heading from "../components/Heading";
import Body from "../components/Body";
import Affirmation from '../components/affirm';
import image from "../assets/welcome-background.jpg";
import TaskList from '../components/goals';

// import CheckboxList from "../components/CheckboxList";
// import Combining from "../components/graphs";



export default function UserPage() {

  const { user } = useContext(UserContext)

  console.log(localStorage.getItem('token'), 'from landing page')
  

  return (
    <div className="pages-div">
      <Heading variant="default" />
      <div>
        <img src={image} className="img-welcome"/>
        <h2 className="welcome-user">Welcome back {user.username}!</h2>
      </div>
      <Body sidebar={true}>
        <Affirmation />
        <TaskList />
      </Body>
    </div>
  );
}






