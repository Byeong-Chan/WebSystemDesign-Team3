// Create trade schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var buyerSchema = new Schema({
    buyer_id: String,
    price: Number, //구매자가 원하는 가격
    location: String, //구매자가 원하는 희망 장소
    buyer_contact:Number // 공개할 구매자 연락처 0: email, 1: phone
});
var tradeSchema = new Schema({
    title: String,
    author: String,
    edition: Number,
    seller_id: String, //판매자
    seller_contact: Number, //공개할 판매자 연락처 0: email, 1: phone
    img_url: [String], //책 이미지
    tag: String, //교수님 이름, 과목 등 태그
    comment: String, // 판매자가 남기고 싶은 말
    state: Number, // 책의 보존 상태
    buyers:[buyerSchema], //구매자들
    time_stamp: Date
});

module.exports = mongoose.model('auction',auctionSchema);