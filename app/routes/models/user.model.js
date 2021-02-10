module.exports = function (user_id, email, salt, pw, nickname, profile, updatedAt, createdAt, enabled) {
  this.user_id = user_id;
  this.email = email;
  this.salt = salt;
  this.pw = pw;
  this.nickname = nickname;
  this.profile = profile;
  this.updatedAt = updatedAt;
  this.createdAt = createdAt;
  this.enabled = enabled;
};