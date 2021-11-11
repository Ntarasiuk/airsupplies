import { Button, Display, Image, Text } from "@geist-ui/react";
import Head from "next/head";
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
            <Display shadow style={{ cursor: "pointer" }}>
              <Image
                width="800px"
                height="600px"
                src="/og_image.jpg"
                alt="Airbundles logo"
              />
            </Display>
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
      </Layout>
    </>
  );
}
