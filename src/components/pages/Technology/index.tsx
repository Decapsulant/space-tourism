import axios from 'axios';
import React from 'react';
import TechnologyBlock from './TechnologyBlock';
import MediaQuery from 'react-responsive';
import { motion } from 'framer-motion';
import { elementAnimation } from '../../../animation';
import { TechnologyImage } from './Image';

const technologyNavbar: number[] = [1, 2, 3];

type ImagesTechnology = {
  portrait: string;
  landscape: string;
};
interface TechnologyItems {
  name: string;
  images: ImagesTechnology;
  description: string;
}

const Technology = () => {
  const [items, setItems] = React.useState<TechnologyItems[]>([]);
  const [technologyId, setTechnologyId] = React.useState(0);
  const [isError, setIsError] = React.useState(false);

  const onChangeCategory = (id: number) => {
    setTechnologyId(id);
  };

  React.useEffect(() => {
    const getTechnology = async () => {
      try {
        const { data } = await axios.get<TechnologyItems[]>(
          `https://63404624e44b83bc73cd3e47.mockapi.io/Technology?id=${technologyId}`,
        );
        setItems(data);
      } catch (err) {
        setIsError(true);
      }
    };
    getTechnology();
  }, [technologyId]);
  return (
    <motion.section initial="hidden" whileInView="visible" className="technology">
      <motion.h4 variants={elementAnimation} className="page__title technology__title">
        <span>03</span>Space Launch 101
      </motion.h4>
      <div className="technology__inner">
        {isError ? (
          <div className="error">connection error</div>
        ) : (
          <>
            <div className="technology__content">
              <ul className="technology__navbar">
                {technologyNavbar.map((obj, i) => (
                  <motion.li
                    variants={elementAnimation}
                    custom={i}
                    key={i}
                    onClick={() => onChangeCategory(i)}
                    className={
                      technologyId === i
                        ? 'technology__navbar-link technology__navbar-link--active'
                        : 'technology__navbar-link'
                    }>
                    {obj}
                  </motion.li>
                ))}
              </ul>
              {items.map((obj) => (
                <TechnologyBlock key={obj.name} {...obj} />
              ))}
            </div>
            <div className="technology__wrapper-img">
              <MediaQuery minWidth={1300}>
                {items.map((obj) => (
                  <TechnologyImage key={obj.name} name={obj.name} image={obj.images.portrait} />
                ))}
              </MediaQuery>
              <MediaQuery maxWidth={1299}>
                {items.map((obj) => (
                  <TechnologyImage key={obj.name} name={obj.name} image={obj.images.landscape} />
                ))}
              </MediaQuery>
            </div>
          </>
        )}
      </div>
    </motion.section>
  );
};
export default Technology;
