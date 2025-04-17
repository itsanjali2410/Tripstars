// packageRoutes.js or packageRoutes.ts
import express from "express";
import Package from "../models/package.js"; // Make sure the path and extension are correct

const router = express.Router();

// GET all packages
router.get("/", async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create package
router.post("/", async (req, res) => {
  console.log("Incoming POST data:", req.body); // 👈 Add this
  try {
    const newPackage = new Package(req.body);
    const savedPackage = await newPackage.save();
    res.status(201).json(savedPackage);
  } catch (err) {
    console.error("Error in POST /api/packages:", err); // 👈 log error
    res.status(400).json({ message: err.message });
  }
});

router.get("/test", (req, res) => {
  res.send("Package route is working 🚀");
});

// PUT update package
router.put("/:id", async (req, res) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPackage) return res.status(404).json({ message: "Package not found" });

    res.json(updatedPackage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
