module.exports = function (category_id,
  category_main,
  category_medium,
  category_small,
  category_tiny,
  profile,
  createdAt,
  updatedAt, 
  enabled) {
  this.category_id = category_id;
  this.category_main = category_main;
  this.category_medium = category_medium;
  this.category_small = category_small;
  this.category_tiny = category_tiny;
  this.profile = profile;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
  this.enabled = enabled;
};