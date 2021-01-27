import Head from "next/head";
import InternalLink from "next/link";
import { Button, Link as ExternalLink } from "@chakra-ui/react";

import PlayTable from "../../components/PlayTable";
import Layout from "../../components/Layout";
import { fetchEntry } from "../../utils/contentfulPages";

export default function Play({ playTable }) {
  //   const {
  // title,
  // heroImage,
  // section1Title,
  // section1Content,
  // section2Title,
  // section2Content,
  //   } = fields;

  return (
    <Layout>
      <Head>
        <title>WIHA - Play Hockey</title>
      </Head>
      <PlayTable playTable={playTable} />
      <ExternalLink
        href="https://docs.google.com/forms/u/1/d/1Jni35B2Fw-tmMq6E4vUP-nNulPpkJk3AI1iU3fntJcM/"
        isExternal
      >
        <Button mr="5" size="lg" variant="wiha" colorScheme="wiha">
          Become a member
        </Button>
      </ExternalLink>
      <InternalLink href="/contact">
        <Button size="lg" variant="wiha" colorScheme="wiha">
          Get in touch
        </Button>
      </InternalLink>
    </Layout>
  );
}

export async function getStaticProps() {
  const playTable = await fetchEntry("2OomGmziRfIZwJmUyKwPA3");

  return {
    props: {
      playTable: playTable.fields.playTable,
    },
  };
}
