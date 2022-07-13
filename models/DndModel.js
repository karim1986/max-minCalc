const mongoose = require("mongoose");

const dndSchema = mongoose.Schema(
  {
    dnd: {
      type: [Object],
      reuiqred: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Dnd", dndSchema);
