import { Schema, model } from 'mongoose';

const noteSchema = new Schema( {
	title: { type: String, required: true },
	desc: { type: String, required: true },
}, {
	timestamps: true,
	versionKey: false,
} );

export default model( 'Task', noteSchema );
