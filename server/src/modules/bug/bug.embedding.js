const aiService = require("../../services/ai.service");
const embeddingService = require("../../services/embedding.service");
const duplicateService = require("../../services/duplicate.service");

exports.generateEmbedding = async (text) => {
	const embedding = await aiService.generateEmbedding(text);
	return embedding;
};

exports.processBugEmbedding = async (bug) => {
	const text = `
Title: ${bug.title}
Description: ${bug.description}
Steps: ${bug.steps}
`;

	const embedding = await embeddingService.generateEmbedding(text);

	bug.embedding = embedding;
	await bug.save();

	const duplicates = await duplicateService.findDuplicates(embedding);

	return duplicates;
};

/*
const aiService = require("../../services/ai.service");
const duplicateService = require("../../services/duplicate.service");

exports.generateEmbedding = async (text) => {
  return aiService.generateEmbedding(text);
};

exports.processBugEmbedding = async (bug) => {
  const text = `
Title: ${bug.title}
Description: ${bug.description}
Steps: ${bug.steps}
`;

  const embedding = await aiService.generateEmbedding(text);

  bug.embedding = embedding;
  await bug.save();

  const duplicates = await duplicateService.findDuplicates(embedding);

  return duplicates;
};
*/
