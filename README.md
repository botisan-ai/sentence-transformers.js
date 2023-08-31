# Sentence-Transformers.js

Run sentence-transformers compatible models in Node.js or browser.

## Motivation

I found that it is hard to serve the sentence-transformers models online because the Python package installations are so large. Thanks to transformers.js we can now serve most of these models easily. However, there are some discrepancies between the feature-extraction pipeline and the actual sentence-transformers encoding configurations. So I would like to properly implement the sentence-transformers models in TypeScript.

## Installation

```bash
npm install @botisan-ai/sentence-transformers
```

## Usage

```typescript
import { SentenceTransformer } from '@botisan-ai/sentence-transformers';

async function main() {
  const model = await SentenceTransformer.from_pretrained('Supabase/bge-small-en');
  const { sentence_embedding } = await model.encode(['Hello world!']); // returns Tensor from '@xenova/transformers'
}

main();
```

## License

[MIT](./LICENSE)
