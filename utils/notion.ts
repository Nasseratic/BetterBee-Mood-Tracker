import { Client } from "@notionhq/client";
import { formatISO } from "date-fns";
import { Alert } from "react-native";
import { match, not, select, __ } from "ts-pattern";

// Initializing a client
export const notionSDK = new Client({
  auth: "secret_",
});

export const createMoodLog = async ({
  content,
  date,
}: {
  content: string;
  date: Date;
}) => {
  await notionSDK.pages.create({
    parent: {
      type: "database_id",
      database_id: "4ea838e3c8794132b3ac1d76ee6163d7",
    },
    properties: {
      Mood: {
        type: "title",
        title: [{ text: { content } }],
      },
      Date: {
        type: "date",
        date: {
          start: formatISO(date, { representation: "date" }),
        },
      },
    },
  });
};

export const listMoodLogs = async () => {
  const results = Object.fromEntries(
    (
      await notionSDK.databases.query({
        database_id: "4ea838e3c8794132b3ac1d76ee6163d7",
      })
    ).results.map((page) =>
      match(page)
        .with(
          {
            object: "page",
            properties: {
              Date: { date: select("date") },
              Mood: { title: [{ plain_text: select("mood") }] },
            },
          },
          ({ date, mood }) => [date?.start, mood[0]]
        )
        .otherwise(() => [])
    )
  );
  return results;
};
