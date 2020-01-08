var mongoose = require('mongoose');
var User = mongoose.model('User');
var crypto = require('crypto');

// make password hashed
function hashPW(pwd) {
  if (pwd) {
    return crypto.createHash('sha512').update(pwd).digest('base64').toString();
  }

}

// controllers: RSET API
// create a new user 
exports.signup = function (req, res) {
  // create an instance according to moongoose instance
  var user = new User();
  try {
    user.set('username', req.body[0]);
    user.set('hashed_password', hashPW(req.body[1]));
    user.set('email', req.body[2]);
    user.set('role', 'common');
  } catch (error) {
    res.status(500);
    res.json(err);
  }
  // save
  user.save(function (err) {
    if (err) {
      res.status(500);
      res.json(err);
    } else {
      res.status(200);
      res.json('Registered successfully!');
    }
  });
};

//return all the user info from the back-end
exports.list = function (req, res) {
  User.find({ role: 'toAdvanced' }).exec(function (err, users) {
    let data = users;
    res.status(200);
    res.json(data);
  });

};

exports.changeRole = function (req, res) {
  User.findOne({ username: req.body[0] }).exec(function (err, user) {
    if (err) {
      res.status(500);
      res.json('Something wrong, please try again!');
    } else if (user) {
      try {
        user.set('role', req.body[1]);
      } catch (error) {
        res.status(500);
        res.json('Something wrong, please try again!');
      }
      user.save(function (err) {
        if (err) {
          res.status(500);
          res.json('Something wrong, please try again!');
        } else {
          res.status(200);
          res.json('changed role successfully!');
        }
      });
    }
  });

};

//read user info: login
exports.login = function (req, res) {
  User.findOne({ username: req.params.id }).exec(function (err, user) {
    if (!user) {
      res.json('User ' + req.params.id + ' Not Found');
      res.status(401);
    } else if (user.hashed_password === hashPW(req.query.pwd)) {
      // password correct
      res.status(200);
      let data = [{
        "id": req.params.id,
        "role": user.role
      }];
      res.json(data);
    } else {
      res.json('Wrong Password');
      res.status(403);
    }
  });
};

// update user info
exports.updateUser = function (req, res) {
  User.findOne({ username: req.params.id }).exec(function (err, user) {
    if (err) {
      res.status(500);
      res.json('Something wrong, please try again!');
    } else if (user) {
      try {
        user.set('hashed_password', hashPW(req.body[0]));
        user.set('email', req.body[1]);
        user.set('role', req.body[2]);
      } catch (error) {
        res.status(500);
        res.json('Something wrong, please try again!');
      }
      user.save(function (err) {
        if (err) {
          res.status(500);
          res.json('Something wrong, please try again!');
        } else {
          res.status(200);
          res.json('updated successfully!');
        }
      });
    }
  });
};

// // delete function
// // delete this user
exports.deleteUser = function (req, res) {
  User.findOne({ username: req.params.id }).exec(function (err, user) {
    if (user) {
      user.remove(function (err) {
        if (err) {
          res.status(500);
          res.json('Something wrong, please try again!');
        } else {
          res.status(200);
          res.json('deleted successfully!');
        }
      });
    } else {
      res.status(500);
      res.json('Something wrong, please try again!');
    }
  });
};


// clarifai

const clarifai = require('clarifai');

const clarifaiAPP = new clarifai.App({ apiKey: '1a4e1161968141e4a8d7e16b645947d3' });

// clarifai
exports.clarifai = function (req, res) {
  let data = [];
  let m = req.params.model;
  console.log(m);
  switch (m) {
    case "general":
      clarifaiAPP.models.predict(Clarifai.GENERAL_MODEL, { base64: req.body[0] }).then(
        function (response) {
          for (let i = 0; i < response['outputs'][0]['data']['concepts'].length; i++) {
            data[i] = response['outputs'][0]['data']['concepts'][i]['name'];
          }
          res.status(200);
          res.json(data);
        }, function (error) {
          res.status(400);
          console.error(error);
        }
      );
      break;
    case "apparel":
      clarifaiAPP.models.predict("e0be3b9d6a454f0493ac3a30784001ff", { base64: req.body[0] }).then(
        function (response) {
          for (let i = 0; i < response['outputs'][0]['data']['concepts'].length; i++) {
            data[i] = response['outputs'][0]['data']['concepts'][i]['name'];
          }
          res.status(200);
          res.json(data);
        }, function (error) {
          res.status(400);
          console.error(error);
        }
      );
      break;
    case "celebrity":
      clarifaiAPP.models.predict("e466caa0619f444ab97497640cefc4dc", { base64: req.body[0] }).then(
        function (response) {
          for (let i = 0; i < response['outputs'][0]['data']['regions'][0]['data']['face']['identity']['concepts'].length; i++) {
            data[i] = response['outputs'][0]['data']['regions'][0]['data']['face']['identity']['concepts'][i]['name'];
          }
          res.status(200);
          res.json(data);
        }, function (error) {
          res.status(400);
          console.error(error);
        }
      );
      break;
    case "color":
      clarifaiAPP.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", { base64: req.body[0] }).then(
        function (response) {
          for (let i = 0; i < response['outputs'][0]['data']['colors'].length; i = i + 2) {
            data[i] = response['outputs'][0]['data']['colors'][i]['w3c']['name'];
            data[i + 1] = response['outputs'][0]['data']['colors'][i]['w3c']['hex'];
          }
          res.status(200);
          res.json(data);
        }, function (error) {
          res.status(400);
          console.error(error);
        }
      );
      break;
    case "demographics":
      clarifaiAPP.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", { base64: req.body[0] }).then(
        function (response) {
          data[0] = 'age: ' + response['outputs'][0]['data']['regions'][0]['data']['face']['age_appearance']['concepts'][0]['name'];
          data[1] = response['outputs'][0]['data']['regions'][0]['data']['face']['gender_appearance']['concepts'][0]['name'];
          data[2] = response['outputs'][0]['data']['regions'][0]['data']['face']['multicultural_appearance']['concepts'][0]['name'];

          res.status(200);
          res.json(data);
        }, function (error) {
          res.status(400);
          console.error(error);
        }
      );
      break;

  }


}
