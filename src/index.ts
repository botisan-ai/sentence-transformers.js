import { env } from '@xenova/transformers';

import { SentenceTransformer } from "./model";

async function main() {
  console.log(env);
  const sentenceTransformer = await SentenceTransformer.from_pretrained(
    "Supabase/bge-small-en",
  );
  await sentenceTransformer.encode(["Hello world", "How are you guys doing?"]);
}

main();
