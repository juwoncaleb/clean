// lib/contentful.js
import { createClient } from 'contentful';

console.log('💡 ENV SPACE_ID:', process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
console.log('🔑 ENV ACCESS_TOKEN:', process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN);

if (!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
  throw new Error('❌ Missing Contentful environment variables. Check your .env.local file.');
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// Export function to get entries
export async function getEntries(contentType) {
  const entries = await client.getEntries({
    content_type: contentType,
  });

  return entries.items;
}
