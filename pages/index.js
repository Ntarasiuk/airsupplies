import { Button, Text } from "@geist-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hosting Supplies for Airbnb, VRBO | AirBundles</title>
        <meta
          name="description"
          content="Hosting isn't easy. Find the best hosting products and get expert advice."
          key="desc"
        />
        <meta
          property="og:description"
          content="Finding the right things for your rented space is a struggle. We
              are making it easy to find what best tried and
              true products"
        />
        <meta property="og:site_name" content="AirBundles" />
        <meta property="og:url" content="https://airbundles.com/" />
        <meta
          property="og:image"
          content="https://airbundles.com/og_image.jpg"
        />
      </Head>
      <Layout>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link href="/bundles" passHref>
            <div>
              <Image
                height="600px"
                width="800px"
                src="/og_image.jpg"
                className="cover-image"
                alt="Airbundles logo"
              />
            </div>
          </Link>
          <h1>Hosting isn&apos;t easy</h1>
          <div style={{ maxWidth: 600 }}>
            <Text p font={1}>
              Whether you&apos;re a host on Airbnb or VRBO, finding the right
              things for your rented space is a struggle. We are making it easy
              to find the best tried and true products for your vacation rental.
            </Text>
          </div>
          <Link href="/bundles" passHref>
            <Button type="secondary" scale={2}>
              Check it out!
            </Button>
          </Link>
        </div>
        <div style={{ marginTop: 60, textAlign: "center" }}>
          <a
            href="https://www.producthunt.com/posts/airbundles?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-airbundles"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=319272&theme=light"
              alt="Airbundles - Everything you need in your vacation home | Product Hunt"
              style={{ width: 250, height: 54 }}
              width="250"
              height="54"
            />
          </a>
        </div>
      </Layout>
      <style jsx global>{`
        .cover-image {
          cursor: pointer;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
