import { Container } from "react-bootstrap";
import Section from "../components/Section";

const Home = () => {
  return (
    <Container>
      <Section
        title={"Model 3"}
        description={"Leasing starting at $349/mo"}
        bgImg={"Homepage-Model-3-Desktop-LHD.jpeg"}
        LButton={"View inventory"}
        RButton={"Custom Order"}
      />
      <Section
        title={"Model Y"}
        description={"Leasing starting at $349/mo"}
        bgImg={"Homepage-Model-Y-Global-Desktop.jpeg"}
        LButton={"View inventory"}
        RButton={"Custom Order"}
      />
      <Section
        title={"Model S"}
        description={"Leasing starting at $349/mo"}
        bgImg={"Model-S-homepage-desktop.jpeg"}
        LButton={"View inventory"}
        RButton={"Custom Order"}
      />
      <Section
        title={"Model X"}
        description={"Leasing starting at $349/mo"}
        bgImg={"Homepage-Model-X-Desktop-LHD.jpeg"}
        LButton={"View inventory"}
        RButton={"Custom Order"}
      />
      <Section
        title={"Solar Roof"}
        description={"Leasing starting at $349/mo"}
        bgImg={"Homepage-SolarRoof-Desktop-Global.webp"}
        LButton={"View inventory"}
        RButton={"Custom Order"}
      />
    </Container>
  );
};

export default Home;
