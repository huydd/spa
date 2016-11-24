"use strict";
const mongoose = require('mongoose');

var schema = mongoose.Schema({
  name: String,
  seats: Number,
  status: {type: String, default: 'enabled'},
  created_at: {type: Date, default: Date.now()},
  updated_at: {type: Date, default: Date.now()}
});

const Model = mongoose.model('Table', schema);

class Table {
  static new_table(table, cb) {
    return new Model(table)
      .save(cb)
  }
}

module.exports = Table;