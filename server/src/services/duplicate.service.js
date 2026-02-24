const bugModel = require("../modules/bug/bug.model");
const { cosineSimilarity } = require("../utils/similarity");

exports.findDuplicates = async (embedding, threshold = 0.85) => {
	const bugs = await bugModel
		.find({
			embedding: { $exists: true },
		})
		.limit(50);

	const results = [];

	for (const bug of bugs) {
		const score = cosineSimilarity(embedding, bug.embedding);

		if (score >= threshold) {
			results.push({
				bug,
				similarity: score,
			});
		}
	}

	return results.sort((a, b) => b.similarity - a.similarity);

	// return results.slice(0, 5);
};
