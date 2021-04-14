import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            I am an experienced Software Engineer/ QA Automation Engineer/ QA
            Analyst with a demonstrated history of working in the financial
            services industry. I am also skilled in DevOps, Ruby, Elastic Stack
            (ELK), Front-end Development, and Linux. Currently, I am working on
            to complete Full Stack Development bootcamp from University of
            Richmond so that I can enhance my software development skills. I am
            hoping to get valuable skills like HTML, CSS, JavaScript, React,
            Node.js, MongoDB, jquery,bootstrap,API, JSON, AJAX, etc. Besides, I
            am also expecting to complete supplemental self-study topics such as
            Java, Python, C#,etc. If you want to know more about my please feel
            free check out my resume or connect me at LinkedIn
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
