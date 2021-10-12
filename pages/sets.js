import { useQuery } from "@apollo/client";
import {
  Badge,
  Divider,
  Grid,
  Loading,
  Spacer,
  useTheme,
} from "@geist-ui/react";
import Layout from "components/Layout";
import SetCard from "components/SetCard";
import gql from "graphql-tag";
import React from "react";

function SetPage() {
  const theme = useTheme();

  const { data, loading, error } = useQuery(gql`
    {
      category(order_by: { name: asc_nulls_last }) {
        slug
        description
        name
        sets {
          id
          cover_image
          description
          subtitle
          title
          is_airbnb_plus
        }
      }
    }
  `);

  const catData = data?.category || [];
  if (loading)
    return (
      <Layout>
        <Loading>Loading</Loading>
      </Layout>
    );
  return (
    <Layout>
      <h2>Sets</h2>
      {catData?.map((cat) => (
        <div key={cat?.id} style={{ marginBottom: 40 }}>
          {cat?.name ? (
            <Divider mt={12} mb={12}>
              <h3 style={{ marginBottom: 0 }}>{cat.name}</h3>
            </Divider>
          ) : null}
          <Grid.Container gap={5}>
            {[...cat?.sets]?.map((set) => (
              <Grid xs={24} md={12} lg={8} xl={6} key={set?.id}>
                <SetCard
                  image={set?.cover_image}
                  title={set?.title}
                  content={set?.subtitle}
                  btnText="Check out the list"
                  stars={5}
                  link={`/sets/${cat?.slug}/${set?.id}`}
                  showStars={false}
                  badge={
                    set?.is_airbnb_plus ? (
                      <>
                        <Spacer w={0.5} />
                        <Badge style={{ backgroundColor: theme.palette.alert }}>
                          Airbnb Plus
                        </Badge>
                      </>
                    ) : null
                  }
                />
              </Grid>
            ))}
          </Grid.Container>
        </div>
      ))}
    </Layout>
  );
}

export default SetPage;
