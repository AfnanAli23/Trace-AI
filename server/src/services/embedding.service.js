const openai = require("../config/openai");

exports.generateEmbedding = async (text) => {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });

  return response.data[0].embedding;
};