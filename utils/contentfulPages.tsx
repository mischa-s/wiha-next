const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
  // requestLogger: (config) => console.log(config),
});

export async function fetchEntries(contentTypeId: string, order: string) {
  try {
    const entries = await client.getEntries({
      content_type: contentTypeId,
      order: order && `fields.${order}`,
    });
    if (entries.items) return entries.items;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchEntry(id: string) {
  try {
    const entry = await client.getEntry(id);
    if (entry) return entry;
  } catch (error) {
    console.error(error);
  }
}

// get all posts
export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate',
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries.`);
}

// get a post by slug
export async function getPostBySlug(slug) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    limit: 1,
    'fields.slug[in]': slug[0],
  });
  if (entries.items) {
    return entries.items[0];
  }
  console.log(`Error getting Entries.`);
}

// get more 3 latest posts
export async function getMorePosts(slug) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    limit: 3,
    order: '-fields.publishDate',
    'fields.slug[nin]': slug[0],
  });

  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries.`);
}

function parsePostSlug({ fields }) {
  return {
    slug: fields.slug,
  };
}

function parsePostSlugEntries(entries, cb = parsePostSlug) {
  return entries?.items?.map(cb);
}

// get all slugs of posts
export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    select: 'fields.slug',
  });
  return parsePostSlugEntries(entries, (post) => post.fields);
}
