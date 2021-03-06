/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: String,
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo',
    },
  ],
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    const nextReturnedObject = returnedObject;
    nextReturnedObject.id = nextReturnedObject._id.toString();
    delete nextReturnedObject._id;
    delete nextReturnedObject.__v;
    delete nextReturnedObject.passwordHash;
  },
});
const User = mongoose.model('User', userSchema);

module.exports = User;
