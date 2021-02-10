module.exports = function (production_id,
  brand_id,
  category_id,
  name,
  price,
  sale,
  point,
  type,
  fee,
  return_fee,
  exchange_fee,
  special_fee,
  inaccessible,
  return_address,
  createdAt,
  updatedAt,
  enabled) {
  this.production_id = production_id;
  this.brand_id = brand_id;
  this.category_id = category_id;
  this.name = name;
  this.price = price;
  this.sale = sale;
  this.point = point;
  this.type = type;
  this.fee = fee;
  this.return_fee = return_fee;
  this.exchange_fee = exchange_fee;
  this.special_fee = special_fee;
  this.inaccessible = inaccessible;
  this.return_address = return_address;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
  this.enabled = enabled;
};