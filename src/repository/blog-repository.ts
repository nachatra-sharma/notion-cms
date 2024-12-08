import notion from "@/notion/notion";

export const getAllPublishedPosts = async () => {
  try {
    // fetching list of posts from notion
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_DB_ID || "",
      filter: {
        property: "published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "date",
          direction: "descending",
        },
      ],
    });
    // returning the result
    return results;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getSinglePosts = async (slug: string) => {
  try {
    // fetching single posts from notion
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_DB_ID || "",
      filter: {
        property: "slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });
    // returning the result back
    return results;
  } catch (error) {
    console.log(error);
    return error;
  }
};
