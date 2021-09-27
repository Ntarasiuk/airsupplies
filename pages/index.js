import { Button, Text } from "@geist-ui/react";
import Link from "next/link";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Hosting isn&apos;t easy</h2>
        <div style={{ maxWidth: 400 }}>
          <Text p>
            Whether you are a host on Airbnb or VRBO, finding the right things
            for your rented space is a struggle. We are making it easy to find
            what best suites you with tried and true products
          </Text>
        </div>
        <Link href="/sets" passHref>
          <Button>Check it out!</Button>
        </Link>
      </div>
    </Layout>
  );
}
