import React from "react";

import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import Rank from "../Rank/Rank";
import Particle from "../Particle/Particle";
import ShowImage from "../ShowImage/ShowImage";
import ImageInfo from "../ImageInfo/ImageInfo";

const Home: React.FC = () => {
    return (
        <div className="App">
            <Particle />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm />
            <ShowImage />
            <ImageInfo />
        </div>
    );
}

export default Home;