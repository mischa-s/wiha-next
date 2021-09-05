import { Image, Text } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { PostInterface } from '../types';

type PostProps = {
  post: PostInterface;
};

export default function Post({ post }: PostProps) {
  const { heroImage, body, title } = post;
  const imageURL = heroImage?.fields?.file?.url;

  return (
    <>
      {imageURL && (
        <div>
          <Image
            mb="2rem"
            w={[350, 550, 700, 800]}
            objectFit="cover"
            src={imageURL}
            alt={`image thumbnail for post ${title}`}
          />
        </div>
      )}
      <Text as="div">{documentToReactComponents(body)}</Text>
    </>
  );
}
