import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<'svg'>>;
	description: JSX.Element;
	// TODO: connect links
	link?: string;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Guides',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
				<>
					Check out our Quick Start guide to start syncing. You can also view other detailed guides for various use
					cases, ledgers, customizability, and more.
				</>
		)
	},
	{
		title: 'Reference',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
				<>
					The Reference gives you detailed information about each ledger, operation, and resource. The Reference will
					help you know what attributes are required for which operations.
				</>
		)
	},
	{
		title: 'Contribute',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
				<>
					Want to help build LedgerSync? Check out our guidelines and resources for extending LedgerSync to new legders,
					resources, and more.
				</>
		)
	}
];

function Feature({title, Svg, description}: FeatureItem) {
	return (
			<div className={clsx('col col--4')}>
				<div className="text--center">
					<Svg className={styles.featureSvg} role="img"/>
				</div>
				<div className="text--center padding-horiz--md">
					<h3>{title}</h3>
					<p>{description}</p>
					<a href={'#'}>{title + ' →'}</a>
				</div>
			</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
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
