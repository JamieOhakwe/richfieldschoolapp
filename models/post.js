import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
	name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, default: 'user'},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    

}, {timestamps: true});

const productSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: {
		type: String,
		required: true,
	},
});

export default mongoose.model("Post", userSchema);
