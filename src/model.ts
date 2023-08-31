import { AutoModel, AutoTokenizer } from "@xenova/transformers";

export class SentenceTransformer {
  constructor(
    private readonly tokenizer: AutoTokenizer,
    private readonly model: AutoModel,
  ) {}

  static async from_pretrained(
    modelName: string
  ): Promise<SentenceTransformer> {
    const tokenizer = await AutoTokenizer.from_pretrained(modelName);
    const model = await AutoModel.from_pretrained(modelName, {
      quantized: false,
    });
    return new SentenceTransformer(tokenizer, model);
  }

  async encode(sentences: string[]): Promise<number[][]> {
    //@ts-ignore
    const modelInputs = await this.tokenizer(sentences, {
      padding: true,
      truncation: true,
    });

    //@ts-ignore
    const outputs = await this.model(modelInputs);



    console.log(modelInputs);
    console.log(Object.keys(outputs));

    return [];
  }
}
