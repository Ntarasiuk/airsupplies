import { Divider, Text } from "@geist-ui/react";
import Layout from "components/Layout";
import Head from "next/head";

const BlogPage = () => (
  <>
    <Head>
      <title>AirBundle Blog | AirBundles</title>
      <meta
        property="og:description"
        content="Hosting Blog - Expert advice from superhosts and more!"
      />
      <meta property="og:site_name" content="AirBundles" />
      <meta property="og:url" content="https://airbundles.com/blog" />
      <meta property="og:image" content="https://airbundles.com/og_image.jpg" />
    </Head>
    <Layout>
      <Text h2> What are &quot;Essentials Amenities&quot;?</Text>
      <Divider />
      <Text p>
        Essential amenities as defined by Airbnb is the following short list of
        products for your guests
      </Text>
      <Text em>
        <ul>
          <div style={{ marginTop: 8 }}>
            <li>Toilet paper</li>
          </div>
          <div style={{ marginTop: 8 }}>
            <li>Soap</li>
          </div>
          <div style={{ marginTop: 8 }}>
            <li>Linens/sheets</li>
          </div>
          <div style={{ marginTop: 8 }}>
            <li>At least one towel per booked guest</li>
          </div>
          <div style={{ marginTop: 8, marginBottom: 32 }}>
            <li>At least one pillow per booked guest</li>
          </div>
        </ul>
      </Text>
      <Text p>
        We recommend you get at the least TRIPLE the number of towels, sheets
        and linens (washables) for the MAX number of guests.
      </Text>
      <Text p>
        If you have lots of movement in bookings, you&apos;ll want to have one
        set for the current guests, one to replace when they checkout, and
        another to have ready while washing the first set.
      </Text>
      <Text p>
        So, if you have a max capacity of 4 guests at your home, you&apos;ll
        need 12 sets of washables.
      </Text>
    </Layout>
  </>
);

export default BlogPage;
