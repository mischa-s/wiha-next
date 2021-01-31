import React from 'react';
import Link from 'next/link';
import { Button, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface BlogRollProps {
  posts: [
    {
      heroImage: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      title: string;
      description: string;
      publishDate: string;
      slug: string;
      body: Document;
    }
  ];
}

export default function BlogRoll({ posts }: BlogRollProps) {
  return (
    <div>
      {posts &&
        posts.map((post) => {
          const {
            heroImage,
            title,
            description,
            slug,
            publishDate,
            body,
          } = post;

          let imageURL = heroImage?.fields?.file?.url;
          // console.log(heroImage);

          return (
            <div key={slug}>
              <article>
                <header>
                  {/* {heroImage ? (
                  <div>
                    <Image
                      src={imageURL}
                      width="125"
                      height="125"
                      alt={`image thumbnail for post ${title}`}
                        />
                  </div>
                ) : null} */}
                  <Heading as="h3" mb="5" size="md">
                    <Link href={slug}>{title}</Link>
                    <span> &bull; </span>
                    <span>{format(parseISO(publishDate), 'dd.MM.yyyy')}</span>
                  </Heading>
                </header>
                <p>{description}</p>
                <br />
                {documentToReactComponents(body)}
                <br />
                <br />
                <Button mb={10} variant="link">
                  <Link href={slug}>Keep Reading →</Link>
                </Button>
              </article>
            </div>
          );
        })}
    </div>
  );
}
