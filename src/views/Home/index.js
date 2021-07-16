import React from "react";

// comp
import Intro from "../../components/Slides/Intro";
import MyIntro from "../../components/Slides/MyIntro";
import ExpBrief from "../../components/Slides/ExpBrief";
import Projects from "../../components/Slides/Projects";
import ExpSS from "../../components/Slides/ExpSS";
import ExpSS2 from "../../components/Slides/ExpSS2";
import ExpSS3 from "../../components/Slides/ExpSS3";
import ExpSS4 from "../../components/Slides/ExpSS4";
import ExpSS5 from "../../components/Slides/ExpSS5";

const Home = () => {
  return (
    <div className="fcol">
      <Intro />
      <MyIntro />
      <ExpBrief />
      <ExpSS />
      <ExpSS2 />
      <ExpSS3 />
      <ExpSS4 />
      <ExpSS5 />
      <Projects />
      <ExpSS3 />
    </div>
  );
};

export default Home;
