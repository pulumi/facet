import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useEffect } from 'react'

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{ siteConfig.title }</h1>
                <p className="hero__subtitle">{ siteConfig.tagline }</p>
                <div className={ styles.buttons }>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    useEffect(() => {
        import("@pulumi/facet").then((f) => {
            f.initDesignSystem({
                element: document.querySelector(":root"),
                prefix: "pulumi",
                mode: "light",
                components: [
                    f.button(),
                ],
            });
        });
    });

    // if (typeof window !== "undefined" && typeof document !== "undefined") {
    //     import("@pulumi/facet").then((f) => {
    //         f.initDesignSystem({
    //             element: document.querySelector(":root"),
    //             prefix: "pulumi",
    //             mode: "light",
    //             components: [
    //                 f.button(),
    //             ],
    //         });
    //     });
    // }

    return (
        <Layout
            title={`${ siteConfig.title }`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
