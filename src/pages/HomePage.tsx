import Home from "../components/Home";
import Heading from "../components/Heading";

export default function HomePage() {
  return (
    <div>
      <div className="home-custom-heading">
      <Heading variant="custom" />
      </div>
      <div>
        <Home />
      </div>
    </div>
  )
}
