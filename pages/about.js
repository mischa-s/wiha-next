import Head from "next/head";

import Layout from "../components/Layout";
import { fetchEntry } from "../utils/contentfulPages";

export default function Play({ fields }) {
  const {
    title,
    heroImage,
    play: playTable,
    section1Title,
    section1Content,
    section2Title,
    section2Content,
  } = fields;

  return (
    <Layout>
      <Head>
        <title>About WIHA</title>
      </Head>
      <h1>About</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const { fields } = await fetchEntry("4q3v8VuOVVY5gQ6P58aSgD");

  return {
    props: {
      fields,
    },
  };
}
