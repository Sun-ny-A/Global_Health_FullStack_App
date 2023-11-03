import Body from "../components/Body";
import Heading from "../components/Heading";
import video from "../assets/river_-_14205 (540p).mp4";

export default function FormPage(props: { children: JSX.Element }) {

  return (
    <Body sidebar={false}>
      <div className="home-video-container">
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted />
      </div>
      <div className="home-custom-heading">
        <Heading variant="custom" />
      </div>
      <div className="form-container">
        {props.children}
      </div>
    </Body>
  )
}
