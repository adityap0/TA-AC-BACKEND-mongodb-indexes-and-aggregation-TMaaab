let mongoose = require("mongoose");
let Schema = mongoose.Schema;
var soschema = new Schema({
  //     - Users
  // - Questions
  // - Answers
  // - REPLY'S on Question/Answers
  // - Up/Down vote on Questions/Answers/Replies
  // - Tags on Questions
  // - Views on Questions
  // - Reputation for each user based on questions asked, answers given, upvotes
  users: [
    {
      name: String,
      email: String,
    },
  ],
  questions: [String],
  answers: [String],
  replies : 
});
module.exports = mongoose.model("stackOverflow", soschema);
