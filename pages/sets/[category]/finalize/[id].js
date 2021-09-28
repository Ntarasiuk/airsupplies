import { useQuery } from "@apollo/client";
import {
  Breadcrumbs,
  Button,
  Link,
  Loading,
  Table,
  Text,
} from "@geist-ui/react";
import { MinusCircle, PlusCircle } from "@geist-ui/react-icons";
import Layout from "components/Layout";
import gql from "graphql-tag";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import styles from "styles/Home.module.css";

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
  const dataSource = (setData?.products || []).map((product) => ({
    image: (
      <div
        style={{
          width: 75,
          height: 75,
          backgroundImage: `url(${product?.photo_url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          margin: 4,
          borderRadius: 8,
        }}
      />
    ),
    description: product?.title,
    operation: "",
    add: "",
    product,
    quantity: 1,
  }));
  const [tableData, setTableData] = useState(dataSource || []);

  useEffect(() => {
    if (tableData.length === 0) setTableData(dataSource);
  }, [dataSource, tableData]);

  const renderAction = (value, rowData, index) => {
    const addHandler = () => {
      setTableData((last) =>
        last.map((product, dataIndex) => {
          if (dataIndex !== index) return product;
          return {
            ...product,
            quantity: (product.quantity || 0) + 1,
          };
        })
      );
    };
    const removeHandler = () => {
      setTableData((last) =>
        last.map((product, dataIndex) => {
          if (dataIndex !== index) return product;
          return {
            ...product,
            quantity: product.quantity >= 1 ? (product.quantity || 1) - 1 : 0,
          };
        })
      );
    };
    return (
      <>
        <Button type="abort" auto scale={1 / 3} onClick={removeHandler}>
          <MinusCircle />
        </Button>

        <Text>{rowData?.quantity}</Text>
        <Button type="abort" auto scale={1 / 3} onClick={addHandler}>
          <PlusCircle />
        </Button>
      </>
    );
  };

  const amazonLink = tableData
    .map(
      (e, index) =>
        `ASIN.${index + 1}=${e?.product?.asin}&Quantity.${index + 1}=${
          e?.quantity
        }&`
    )
    ?.join("");

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
          <h3>Send to your Amazon cart</h3>
          <div style={{ padding: "2rem 0", marginBottom: 30 }}>
            <Table
              data={tableData}
              onChange={(value) => setTableData(value)}
              className={styles.table}
            >
              <Table.Column width={90} prop="image" label="image" />
              <Table.Column prop="description" label="description" />
              <Table.Column
                prop="operation"
                label="operation"
                width={150}
                render={renderAction}
              />
            </Table>

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
                href={`https://www.amazon.com/gp/aws/cart/add.html?${amazonLink}&AssociateTag=airbundles-20`}
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
                  Send to Cart
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default SetPage;
