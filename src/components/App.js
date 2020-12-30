// @flow

import React, { useState } from "react";
import "./styles.css";

import courses_data from "../data/courses.json";
import Grid from "../components/listings/Grid";

export default function App() {
  const [courses] = useState(courses_data);

  return (
    <div>
      <div className="navbar-fixed">
        <nav className="blue lighten-2">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Courses
            </a>
          </div>
        </nav>
      </div>
      <div>
        <Grid items={courses} />
      </div>
    </div>
  );
}
