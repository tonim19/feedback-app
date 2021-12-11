import { Link } from "react-router-dom";
import Card from "../components/card/Card";

const AboutPage = () => {
  return (
    <div className="container">
      <Card>
        <div className="about">
          <h1>About this project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            dicta veritatis aliquam deleniti rerum. Dolorum et error beatae nam
            expedita, minima numquam modi ipsa incidunt, nobis mollitia iusto
            nihil reiciendis, aperiam facere dolorem iure harum. Ex, molestias
            possimus repellendus repudiandae vero nulla veniam architecto! Quam
            modi dicta consequuntur tempora quia, voluptate consectetur,
            architecto sapiente a sequi blanditiis incidunt dolores hic.
          </p>
          <p>Version: 1.0.0</p>
          <p>
            <Link to="/">Back To Home</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AboutPage;
