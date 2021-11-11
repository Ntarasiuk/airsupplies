import { useQuery } from "@apollo/client";
import {
  Breadcrumbs,
  Button,
  Display,
  Grid,
  Image,
  Link,
  Loading,
} from "@geist-ui/react";
import Layout from "components/Layout";
import ProductCard from "components/ProductCard";
import Suggestions from "components/Suggestions";
import gql from "graphql-tag";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";

function SetPage() {
  const { query } = useRouter();

  const set = gql`
    query set($id: Int!) {
      set_by_pk(id: $id) {
        id
        description
        subtitle
        title
        cover_image
        category {
          slug
          description
          name
        }
        products {
          url
          cover_image
          photo_url
          id
          asin
          description
          title
          subtitle
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(set, {
    variables: {
      id: query?.id,
    },
  });

  const setData = data?.set_by_pk;

  return (
    <>
      <Head>
        <title>{setData?.title} | AirBundles</title>
        <meta property="og:description" content={setData?.subtitle} />
        <meta property="og:site_name" content="AirBundles" />
        <meta
          property="og:url"
          content={`https://airbundles.com/bundles/${setData?.category?.slug}/${query?.id}`}
        />
        <meta
          property="og:image"
          content={
            setData?.cover_image || "https://airbundles.com/og_image.jpg"
          }
        />
      </Head>
      <Layout showFooter>
        {loading ? (
          <Loading>Loading</Loading>
        ) : (
          <>
            <Breadcrumbs>
              <NextLink href="/">
                <Breadcrumbs.Item>
                  <Link>Home</Link>
                </Breadcrumbs.Item>
              </NextLink>
              <NextLink href="/bundles">
                <Breadcrumbs.Item>
                  <Link>Bundles</Link>
                </Breadcrumbs.Item>
              </NextLink>
              <Breadcrumbs.Item>{setData?.category?.name}</Breadcrumbs.Item>
            </Breadcrumbs>

            <h2>{setData?.title}</h2>
            <Display shadow caption={<p>{setData?.subtitle}</p>}>
              <Image
                src={setData?.cover_image}
                style={{ maxHeight: 800 }}
                alt="cover photo"
              />
            </Display>
            <div style={{ padding: "2rem 0", marginBottom: 30 }}>
              <Grid.Container gap={2}>
                {setData?.products?.map((product) => (
                  <Grid xs={24} md={12} lg={8} xl={6} key={product?.id}>
                    <ProductCard
                      image={product?.cover_image || product?.photo_url}
                      url={product?.url}
                      // description={product?.description}
                      title={product?.title}
                      subtitle={product?.subtitle}
                    />
                  </Grid>
                ))}
                <Grid xs={24}></Grid>
              </Grid.Container>
              <div
                style={{
                  display: "flex",
                  position: "fixed",
                  bottom: 24,
                  justifyContent: "center",
                  width: "calc(100vw - 10%)",
                }}
              >
                <Link
                  href={`/bundles/${setData?.category?.slug}/finalize/${query?.id}`}
                >
                  <Button
                    style={{
                      bottom: 25,
                      maxWidth: 500,
                      width: 500,
                      height: 50,
                    }}
                    ghost
                    type="secondary"
                    shadow
                  >
                    Finalize List
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
        <Suggestions />
      </Layout>
    </>
  );
}

export default SetPage;
