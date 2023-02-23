import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Card } from "react-bootstrap";
import ShopPageMain from "./ShopPageMain";


function HomePage() {
  return (
    <Card className="">
      <NavBar />
      <div className="container">
        <ShopPageMain/>
      </div>
      <Footer />
    </Card>
  );
}

export default HomePage;
