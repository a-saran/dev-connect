import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Dev Book</h1>
          <h1 className="lead">
            Create developer profile/porfolio,share posts and get help from
            other developers
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            exercitationem molestiae, magnam repudiandae dolore libero
            similique, illo beatae labore molestias, dicta id reiciendis error
            optio nulla! Ea illum laborum non!
          </p>
          <div className="buttons">
            <Link to="/register" className="btn-primary">Register</Link>
            <Link to="/login" className="btn-light">Sign up</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing;