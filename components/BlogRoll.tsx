import { Heading, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { PostInterface } from '../types';

interface BlogRollProps {
  posts: [PostInterface];
}

export default function BlogRoll({ posts }: BlogRollProps) {
  return (
    <Flex direction="column" mb="2rem">
      {posts &&
        posts.map((post) => {
          // console.log(heroImage);
          const { slug, title, description, publishDate } = post;
          return (
            <div key={slug}>
              <Heading as="h3" mt="2rem" mb="1rem" size="md">
                <Link href={`/news/${slug}`}>
                  <Text cursor="pointer">
                    {title}
                    &nbsp;&bull;&nbsp;
                    {format(parseISO(publishDate), 'dd.MM.yyyy')}
                  </Text>
                </Link>
              </Heading>
              <Text isTruncated noOfLines={4}>
                {description}
              </Text>

              <Text mt="1rem" mb="2rem">
                <Link href={`/news/${slug}`}>Keep Reading →</Link>
              </Text>
            </div>
          );
        })}
    </Flex>
  );
}
