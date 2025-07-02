const Journal = require("../models/Journal");

// ✅ Create a journal
exports.createJournal = async (req, res) => {
  try {
    const { title, location, story, feelings, photos, isPublic } = req.body;

    const newJournal = new Journal({
      user: req.user.id, // User from auth middleware
      title,
      location,
      story,
      feelings,
      photos,
      isPublic,
    });

    await newJournal.save();
    res.status(201).json({ message: "Journal entry created!", journal: newJournal });
  } catch (error) {
    res.status(500).json({ error: "Failed to create journal" });
  }
};

// ✅ Get all public journals
exports.getJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ isPublic: true }).populate("user", "name");
    res.status(200).json(journals);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch journals" });
  }
};

// ✅ Get logged-in user's journals (private + public)
exports.getUserJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ user: req.user.id });
    res.status(200).json(journals);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user journals" });
  }
};

// ✅ Update a journal
exports.updateJournal = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);
    if (!journal) return res.status(404).json({ error: "Journal not found" });

    // Check if the logged-in user owns the journal
    if (journal.user.toString() !== req.user.id)
      return res.status(403).json({ error: "Unauthorized" });

    Object.assign(journal, req.body);
    await journal.save();
    res.status(200).json({ message: "Journal updated", journal });
  } catch (error) {
    res.status(500).json({ error: "Failed to update journal" });
  }
};

// ✅ Delete a journal
exports.deleteJournal = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);
    if (!journal) return res.status(404).json({ error: "Journal not found" });

    if (journal.user.toString() !== req.user.id)
      return res.status(403).json({ error: "Unauthorized" });

    await journal.deleteOne();
    res.status(200).json({ message: "Journal deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete journal" });
  }
};

// ✅ Toggle journal privacy (public/private)
exports.toggleJournalPrivacy = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);
    if (!journal) return res.status(404).json({ error: "Journal not found" });

    if (journal.user.toString() !== req.user.id)
      return res.status(403).json({ error: "Unauthorized" });

    journal.isPublic = !journal.isPublic;
    await journal.save();
    res.status(200).json({ message: `Journal is now ${journal.isPublic ? "Public" : "Private"}` });
  } catch (error) {
    res.status(500).json({ error: "Failed to update privacy" });
  }
};

// ✅ Get journals near a location (GeoJSON query)
exports.getNearbyJournals = async (req, res) => {
  try {
    const { longitude, latitude, maxDistance } = req.query;

    if (!longitude || !latitude)
      return res.status(400).json({ error: "Longitude and latitude required" });

    const journals = await Journal.find({
      "location.coordinates": {
        $near: {
          $geometry: { type: "Point", coordinates: [parseFloat(longitude), parseFloat(latitude)] },
          $maxDistance: parseFloat(maxDistance) || 10000, // Default: 10km
        },
      },
      isPublic: true,
    });

    res.status(200).json(journals);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch nearby journals" });
  }
};
