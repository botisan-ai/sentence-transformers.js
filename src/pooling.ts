import { Tensor } from "@xenova/transformers";
//@ts-ignore
import { Callable } from "@xenova/transformers/src/utils/core.js";

export interface PoolingConfig {
  word_embedding_dimension: number;
  pooling_mode_cls_token: boolean;
  pooling_mode_mean_tokens: boolean;
  pooling_mode_max_tokens: boolean;
  pooling_mode_mean_sqrt_len_tokens: boolean;
}

export interface PoolingInput {
  token_embeddings: Tensor;
  attention_mask: Tensor;
}

export interface PoolingOutput {
  sentence_embedding: Tensor;
}

export class Pooling extends Callable {
  constructor(private readonly config: PoolingConfig) {
    super();
  }

  // async _call(inputs: any) {
  //   return this.forward(inputs);
  // }

  // async forward(inputs: PoolingInput): PoolingOutput {

  // }
}
