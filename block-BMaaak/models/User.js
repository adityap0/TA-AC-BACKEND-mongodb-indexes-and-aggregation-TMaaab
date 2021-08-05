var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String },
  address: {
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pin: { type: Number },
  },
});
userSchema.createIndex({ name: 1 }, { unique: true });
userSchema.createIndex({ email: 1 }, { unique: true });

userSchema.createIndex(
  { "address.state": 1, "address.country": 1 },
  { unique: true }
);

module.exports = mongoose.model("Users", userSchema);

// 1. Define unique indexes on username and email.
// 2. define compound indexes on state and country field inside address document. Each country must have states which are unique.

// Q2. Create an article Schema with fields
var articleSchema = new Schema({
  title: { type: String },
  description: { type: String },
  tags: [String],
});

articleSchema.index({ tags: 1 });
articleSchema.createIndex({ title: "text", description: "text" });

// - title
// - description
// - tags[String]

// 1. Add multikey indexes on tags which is an array of strings
// 2. Add text indexes on title as users will search for texts present in an article's title.
// 3. Update text indexes to include descriptions as well. Implement text indexes on both title and description.
