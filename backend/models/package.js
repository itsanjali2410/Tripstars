import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  packageId: { type: String, required: true, unique: true },
  packageName: { type: String, required: true },
  totalGuests: { type: Number, required: true },
  nights: { type: Number, required: true },
  days: { type: Number, required: true },
  theme: { type: String, required: true },
  highlights: [{ type: String }],
  destinationCovered: { type: String },
  totalPackagePrice: { type: String },
  pricePerAdult: { type: String }, // Optional in your data, so not marked required
  packageImage: { type: String }, // Should be a URL or string path
  itinerary: [{ type: mongoose.Schema.Types.Mixed }],
  includes: [
    {
      name: { type: String },
      icon: { type: mongoose.Schema.Types.Mixed } // Because you're using imported icons
    }
  ],
  inclusions: [{ type: String }],
  exclusions: [{ type: String }],
  overviewData: {
    title: { type: String },
    content: { type: String }
  },
  country: { type: String },
  tableData: {
    tab1: [
      {
        star3: { type: String, required: false },
        star4: { type: String, required: false },
        star5: { type: String, required: false }
      }
    ]
  }
});

export default mongoose.model("Package", packageSchema);
