const bugModel = require("./bug.model");
const { analyzeBug } = require("./bug.ai");
const { generateEmbedding, processBugEmbedding } = require("./bug.embedding");
const priorityService = require("../../services/priority.service");

class BugService {
	async createBug(data, userId) {
		const { description, stackTrace, logs, title } = data;

		// AI Analysis
		const aiResult = await analyzeBug({
			description,
			stackTrace,
			logs,
		});

		// Embedding for duplicate detection
		const embedding = await generateEmbedding(
			`${title} ${description} ${stackTrace}`,
		);

		const bug = await bugModel.create({
			...data,
			reporter: userId,
			aiSummary: aiResult.summary,
			aiRootCause: aiResult.rootCause,
			aiSuggestedFix: aiResult.suggestedFix,
			priority: aiResult.priority || "medium",
			embedding,
		});

		const priority = await priorityService.predictPriority({
			title,
			description,
			stackTrace,
		});

		return { bug, priority };
	}

	async getAllBugs(query = {}) {
		return bugModel
			.find(query)
			.populate("reporter", "name email")
			.sort({ createdAt: -1 });
	}

	async getBugById(id) {
		return bugModel.findById(id).populate("reporter assignedTo");
	}

	async updateBug(id, data) {
		return bugModel.findByIdAndUpdate(id, data, { new: true });
	}

	async deleteBug(id) {
		return bugModel.findByIdAndDelete(id);
	}

	// const duplicates = await processBugEmbedding(bug);
}

module.exports = new BugService();

/*
const bugModel = require("./bug.model");
const { analyzeBug } = require("./bug.ai");
const { processBugEmbedding } = require("./bug.embedding");

class BugService {
  async createBug(data, userId) {
    const { description, stackTrace, logs, title } = data;

    // AI Analysis
    const aiResult = await analyzeBug({
      description,
      stackTrace,
      logs,
    });

    const bug = await bugModel.create({
      ...data,
      reporter: userId,
      aiSummary: aiResult.summary,
      aiRootCause: aiResult.rootCause,
      aiSuggestedFix: aiResult.suggestedFix,
      priority: aiResult.priority || "medium",
    });

    // Process embedding + find duplicates
    const duplicates = await processBugEmbedding(bug);

    return {
      bug,
      duplicates,
    };
  }

  async getAllBugs(query = {}) {
    return bugModel.find(query)
      .populate("reporter", "name email")
      .sort({ createdAt: -1 });
  }

  async getBugById(id) {
    return bugModel.findById(id).populate("reporter assignedTo");
  }

  async updateBug(id, data) {
    return bugModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteBug(id) {
    return bugModel.findByIdAndDelete(id);
  }
}

module.exports = new BugService();
*/
