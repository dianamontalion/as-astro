import { GraphQLClient,gql } from "graphql-request";

console.log("Running on:", import.meta.env.SSR ? "Server" : "Client");
console.log("HYGRAPH ENDPOINT:", import.meta.env.ASTRO_HYGRAPH_ENDPOINT);

const client = new GraphQLClient(import.meta.env.ASTRO_HYGRAPH_ENDPOINT);

export async function fetchPosts() {
  const query = gql`
    query Posts {
      posts {
        title
        slug
        body {
          text
        }
      }
    }
  `;

  try {
    return await client.request(query);
  } catch (error) {
    console.error("GraphQL Request Failed:", error);
    return { posts: [] }; // Return an empty array on failure to prevent breaking the site
  }
}

