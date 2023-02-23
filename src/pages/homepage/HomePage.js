import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Card } from "react-bootstrap";
import Banner from "./Banner";
import CollectionList from "./CollectionList";
import ProductList from "./ProductList";
import PopUp from "./PopUp";

function HomePage() {
  return (
    <Card className="">
      <NavBar />
      <div className="container">
          <Banner/>
          <CollectionList/>
          <ProductList/>
          <PopUp/>
      </div>
      <Footer />
    </Card>
  );
}

export default HomePage;
