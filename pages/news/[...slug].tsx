import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { GetStaticProps } from 'next';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import BlogRoll from '../../components/BlogRoll';
import Layout from '../../components/Layout';
import Post from '../../components/Post';

import { PostInterface } from '../../types';

import {
  getPostBySlug,
  getMorePosts,
  getAllPostsWithSlug,
} from '../../utils/contentfulPages';

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/news/${slug}`) ?? [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  const morePosts = await getMorePosts(params.slug);

  return {
    props: {
      post: post ? post.fields : null,
      morePosts: morePosts
        ? morePosts.map((additionalPost) => additionalPost.fields)
        : null,
    },
    revalidate: 1,
  };
};

export interface Props {
  post: PostInterface;
  morePosts: [PostInterface];
}

export default function PostPage({ post, morePosts }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  if (!post) {
    return null;
  }
  return (
    <Layout description={post.title}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Flex direction="column" align="center" bg="blackAlpha.200" py="2rem">
        <Heading as="h1" size="lg" textAlign="center" my={2}>
          {post.title}
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          {post.description}
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Box mt="3rem" px="1.5rem" w={[350, 550, 700, 800]}>
          <Post post={post} />
          <Heading as="h2" size="lg" textAlign="center" mt="3rem">
            Other Recent News
          </Heading>
          <BlogRoll posts={morePosts} />
        </Box>
      </Flex>
    </Layout>
  );
}
