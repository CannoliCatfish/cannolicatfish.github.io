import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'A Brand New World',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Enjoy rediscovering the world of Minecraft with various changes to the world, from an exention of both
		soil and rock types to the use of new mechanics to interact with plenty of new things in the world, such as through processes of Treetapping, Crushing,
		and Sluicing.
      </>
    ),
  },
    {
    title: 'Experimentation and Customizability',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Project Rankine features a host of mechanics which emphasize the use of experimentation and a high degree of
		customizability. Make your alloy compositions using the elements of the Periodic Table to tailor tools to your specific desires.
		
      </>
    ),
  },
  {
    title: 'Play How You Want',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Various gameplay elements have been added to all stages of the game, so don't feel afraid to slow down and take the time to explore other
		avenues outside of progression. With an extensive configuration file, Project Rankine can also be customized in many ways
		to provide an experience specific to your preferences.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
