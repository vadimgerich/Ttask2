import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    author:String,
    text:String,
    comment:String,
    tags: [{
        type: String
    }],
    stars:Number
});

const News = mongoose.model("News", newsSchema);

export default News;
