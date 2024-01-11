import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import SubmitCar from "./SubmitCar";
const UserPageTabs = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="search" title="Search">
        content for Search
        <p>Comming soon ......</p>
      </Tab>
      <Tab eventKey="submit" title="Submit" className="p-2">
        <SubmitCar />
      </Tab>
      <Tab eventKey="about" title="About" className="px-2">
        <h2>StareteNator Bank</h2>

        <p>
          This is a <strong>CRUD</strong> App that uses <strong>MERN</strong>{" "}
          Stack technologies
        </p>
        <p>
          Everything is built by the developer, trying to stick to the best
          practices.
        </p>
        <p>This very first release is built to the point of</p>
        <p>
          <strong>
            User registration, authentication, and submitting a car
          </strong>
        </p>
        <p>
          <strong>Version 1.0.0</strong>
        </p>
        <p>
          <strong>100 % AI FREE CODE</strong>
        </p>
        <p>Deyan Valkov</p>
      </Tab>
    </Tabs>
  );
};

export default UserPageTabs;
