import Heading from "../components/Heading";
import Body from "../components/Body";
import CheckboxList from "../components/CheckboxList";
import Carousels from "../components/Carousels";
import DateCalendarServerRequest from "../components/Calender";
import Stack from 'react-bootstrap/esm/Stack'


export default function UserPage() {

    console.log(localStorage.getItem('token'), 'from landing page')

  return (
    <div className="userpage-div">
    <Heading variant="default" />
        <Body sidebar={true}>
            <Carousels />
            <h2>Welcome, user!</h2>
            <Stack direction='horizontal'>
            <CheckboxList />
            <DateCalendarServerRequest />
            </Stack>
        </Body>
    </div>
  )
}
