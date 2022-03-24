import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://tindev:tindev@cluster0.ouyuj.mongodb.net/tindev?retryWrites=true&w=majority');

export { mongoose };