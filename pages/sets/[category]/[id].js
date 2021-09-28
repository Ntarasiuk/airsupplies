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
import ProductCard from "components/ProductCard";
import gql from "graphql-tag";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import React from "react";
import Layout from "../../../components/Layout";

function SetPage() {
  const { query } = useRouter();

  const set = gql`
    query set($id: Int!) {
      set_by_pk(id: $id) {
        description
        subtitle
        title
        cover_image
        category {
          description
          name
        }
        products {
          url
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
    <Layout>
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
            <NextLink href="/sets">
              <Breadcrumbs.Item>
                <Link>Sets</Link>
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
                    image={product?.photo_url}
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
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default SetPage;
