import { Text, Image } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type PostProps = {
  truncate: boolean;
  post: {
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
  };
};

export default function Post(props: PostProps) {
  const { heroImage, body, title } = props.post;

  const { truncate = true } = props;

  let imageURL = heroImage?.fields?.file?.url;

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
