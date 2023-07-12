import React from 'react';
import { motion } from 'framer-motion';
import { elementAnimation } from '../../../animation/index';
const Home = () => {
  return (
    <motion.section initial="hidden" whileInView="visible" className="home">
      <div className="container">
        <div className="home__inner">
          <div className="home__content">
            <div>
              <motion.h5 custom={0} variants={elementAnimation} className="home__subtitle">
                So, you want to travel to
              </motion.h5>
              <motion.h1 custom={1} variants={elementAnimation} className="home__title">
                Space
              </motion.h1>
              <motion.p custom={2} variants={elementAnimation} className="home__text">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer
                space and not hover kind of on the edge of it. Well sit back, and relax because
                we’ll give you a truly out of this world experience!
              </motion.p>
            </div>
            <motion.button custom={4} variants={elementAnimation} className="home__btn">
              Explore
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Home;
