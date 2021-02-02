import { Text, Image } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { PostInterface } from '../types';

type PostProps = {
  // eslint-disable-next-line react/require-default-props
  truncate?: boolean;
  post: PostInterface;
};

export default function Post({ post, truncate = true }: PostProps) {
  const { heroImage, body, title } = post;
  const imageURL = heroImage?.fields?.file?.url;

  return (
    <>
      {!truncate && imageURL && (
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

      {truncate ? (
        <Text isTruncated noOfLines={4}>
          {documentToReactComponents(body)}
        </Text>
      ) : (
        documentToReactComponents(body)
      )}
    </>
  );
}
