const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
  requestLogger: (config) => console.log(config),
});

export async function fetchEntries() {
  try {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchEntry(id) {
  try {
    const entry = await client.getEntry(id);
    if (entry) return entry;
  } catch (error) {
    console.error(error);
  }
}
