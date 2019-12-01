const mongoose = require('mongoose');
const AlbumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique would force it to only have one
        // unique: true 
    },
    album: String,
    song: String,
    year: Number,
    imageLink: String
})

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;