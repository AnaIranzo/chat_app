

// Get username and roomname from form and pass it to room


  const postRoom = async (req, res) => {
    roomname = req.body.roomname;
    username = req.body.username;
    res.redirect(`/room?username=${username}&roomname=${roomname}`);
  }
  // Rooms

  const getRoom = async (req, res) => {
    res.render('room');
  }

  module.exports = {
    postRoom, 
    getRoom
}