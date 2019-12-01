const mongoose = require('mongoose');
const AlbumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    album: String,
    song: String,
    year: Number
})

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;