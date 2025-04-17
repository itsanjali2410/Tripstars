import Package from "../models/package.js";

// GET all packages
export const getPackages = async (req, res) => {
  try {
    const packages = await Package.find();  // Fetch all packages from DB
    res.json(packages);  // Return the list of packages as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });  // Handle errors
  }
};


// GET package by packageId
export const getPackageById = async (req, res) => {
  const { id } = req.params;
  console.log("Trying to find by _id or packageId:", id);

  try {
    let pkg = await Package.findById(id);

    if (!pkg) {
      pkg = await Package.findOne({ packageId: id });
    }

    if (!pkg) {
      return res.status(404).json({ error: "Package not found" });
    }

    res.status(200).json(pkg);
  } catch (error) {
    console.error("Error in getPackageById:", error);
    res.status(500).json({ error: error.message });
  }
};


// POST - Create a new package
export const createPackage = async (req, res) => {
  try {
    const newPkg = new Package(req.body);  // Create a new package document
    const savedPkg = await newPkg.save();  // Save the new package to DB
    res.status(201).json(savedPkg);  // Return the saved package
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });  // Handle errors
  }
};

// PUT - Update an existing package
export const updatePackage = async (req, res) => {
  try {
    const updatedPkg = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });  // Update package by ID
    if (!updatedPkg) {
      return res.status(404).json({ error: "Package not found" }); // Return error if package not found
    }
    res.json(updatedPkg);  // Return the updated package
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });  // Handle errors
  }
};

// DELETE - Delete a package
export const deletePackage = async (req, res) => {
  try {
    const deletedPkg = await Package.findByIdAndDelete(req.params.id);  // Delete package by ID
    if (!deletedPkg) {
      return res.status(404).json({ error: "Package not found" });  // Return error if package not found
    }
    res.json({ message: "Package deleted" });  // Return success message
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });  // Handle errors
  }
};
