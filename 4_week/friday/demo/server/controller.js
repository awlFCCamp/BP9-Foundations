const db = [
  { songId: 1, songName: "superBass", artist: "Nicki Minda" },
  { songId: 2, songName: "high hopes", artist: "Pink Floyd" },
  { songId: 3, songName: "final countdown", artist: "Europa" },
  { songId: 4, songName: "Flower", artist: "someone" },
  { songId: 5, songName: "song5", artist: "pink" },
  { songId: 6, songName: "song6", artist: "blue" },
];

let songId=6;
module.exports ={
    addSong:(req,res)=>{
        const {songName,artist} = req.body;
        const newObj = {songId,songName,artist};
        db.push(newObj)
        res.status(200).send(db);
        songId++;
    }},
    getSongs:(req,res)=>{
        res.status(200).send(db)
    },
    updateSong:(req,res)=>{
        const {id}=req.params;
        const {newSongName} = req.query;
        const indexofSong = db.findIndex(song=>song.songId===+id)
        if(indexofSong===-1){
            res.status(400).send("song not found")
            return
        }
    },
    deleteSong
}