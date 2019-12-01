const Album = require("../models/AlbumSchema");

exports.getEmAll = async (req, res) => {
  const everybody = await Album.find();
  res.status(200).json({ message: "ALL", data: everybody });
};
exports.getOne = async (req, res) => {
  try {
    const onlyOne = await Album.findById(req.params.id);
    res.status(200).json({ message: "ONLY ONE", data: onlyOne });
  } catch (err) {
    //   res.send('<h1>Shes Not Theeerrree!!!')
    res.status(404).json({ message: "Shes not there!!" });
  }
};
exports.updateOne = async (req, res) => {
  try {
    const updatedThing = await Album.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "UPDATED", data: updatedThing });
  } catch (err) {
    //   res.send('<h1>Shes Not Theeerrree!!!')
    res.status(404).json({ message: "Nothing is added! :(" });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const terminateIt = await Album.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "DELETED", data: terminateIt });
  } catch (err) {
    res.status(404).json({ message: "Its already gone ya big chungus!" });
  }
};

exports.addOne = async (req, res) => {
  // const newAlbum = new Album({
  //     name: req.body.name,
  //     album:  req.body.album,
  //     song: req.body.song,
  //     year: req.body.year
  // })
  const newAlbum = await Album.create(req.body);

  newAlbum.save();
  res.status(200).json({ message: "ADDED ON", data: newAlbum });
};
