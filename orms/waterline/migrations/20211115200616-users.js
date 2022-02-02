"use strict";

var dbm;
var type;
var seed;

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, cb) {
  db.createTable("users", {
    id: {type: "int", primaryKey: true, autoIncrement: true },
    name: "string"
  }, cb);
};

exports.down = function (db, cb) {
  db.dropTable("users", cb);
};

exports._meta = {
  "version": 1
};
