import {
  AutoModel,
  AutoTokenizer,
  PretrainedOptions,
} from "@xenova/transformers";
//@ts-ignore
import { getModelJSON } from "@xenova/transformers/src/utils/hub.js";

export class SentenceTransformer {
  constructor(
    private readonly tokenizer: AutoTokenizer,
    private readonly model: AutoModel
  ) {}

  static async from_pretrained(
    modelName: string,
    options?: PretrainedOptions
  ): Promise<SentenceTransformer> {
    if (!options) {
      options = {
        quantized: true,
        // @ts-ignore
        progress_callback: null,
        config: null,
        // @ts-ignore
        cache_dir: null,
        local_files_only: false,
        revision: "main",
      };
    }
    const tokenizer = await AutoTokenizer.from_pretrained(modelName, options);
    const model = await AutoModel.from_pretrained(modelName, options);
    const modules = await getModelJSON(
      modelName,
      "modules.json",
      true,
      options
    );
    console.log(modules);

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
