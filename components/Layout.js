import { Grid, Page, Text } from "@geist-ui/react";
import Link from "next/link";
import React from "react";
import styles from "styles/Home.module.css";

function Layout({ children, showFooter = false }) {
  return (
    <div>
      <Page className={styles.page}>
        <Page.Header>
          <Grid.Container gap={2} justify="space-between">
            <Grid xs={12}>
              <Link href="/bundles" passHref>
                <a style={{ color: "black", textDecoration: "none" }}>
                  <h2>AirBundles</h2>
                </a>
              </Link>
            </Grid>
            <Grid
              xs={12}
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <div style={{ width: "100%", textAlign: "right" }}>
                <Link href="/blog" passHref>
                  <a
                    style={{
                      color: "black",
                    }}
                  >
                    <h2>Blog</h2>
                  </a>
                </Link>
              </div>
            </Grid>
          </Grid.Container>
        </Page.Header>
        <Page.Content>{children}</Page.Content>
        <Page.Footer>
          {showFooter ? (
            <Text p>
              As an Amazon Associate, I may earn from qualifying purchases
            </Text>
          ) : null}
        </Page.Footer>
      </Page>
    </div>
  );
}

export default Layout;
