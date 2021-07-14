import React from "react";

// comp
import Intro from "../../components/Slides/Intro";
import MyIntro from "../../components/Slides/MyIntro";
import ExpBrief from "../../components/Slides/ExpBrief";
import Projects from "../../components/Slides/Projects";

const Home = () => {
  return (
    <div className="fcol">
      <Intro />
      <MyIntro />
      <ExpBrief />
      <Projects />
    </div>
  );
};

export default Home;
