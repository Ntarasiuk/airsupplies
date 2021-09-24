import { gql } from "graphql-request";
import { useRouter } from "next/dist/client/router";
import React from "react";
import useSWR from "swr";
import Layout from "../../../components/Layout";
import { fetcher } from "../../../utils/swr";

function SetPage() {
  const { query } = useRouter();
  console.log(query);

  const set = gql`
    query set($id: Int!) {
      set(where: { id: { _eq: $id } }) {
        category {
          description
          name
        }
        products {
          asin
          description
          name
          url
        }
      }
    }
  `;
  const { data, error } = useSWR(
    {
      query: set,
      variables: {
        id: query.id,
      },
    },

    fetcher
  );

  console.log(data, error);
  return <Layout>SET PAGE</Layout>;
}

export default SetPage;
