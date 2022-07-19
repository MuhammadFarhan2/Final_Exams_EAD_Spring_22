exports.addFavorite = (req, res) => {
    try {
      if (req.body.name) {
  
        let new_favorite = new favourite();
        new_favorite.name = req.body.name;

        new_favorite.save((err, data) => {
          if (err) {
            res.status(400).json({
              errorMessage: err,
              status: false
            });
          } else {
            res.status(200).json({
              status: true,
              title: 'Added successfully.'
            });
          }
        });
  
      } else {
        res.status(400).json({
          errorMessage: 'Add proper parameter first!',
          status: false
        });
      }
    } catch (e) {
      res.status(400).json({
        errorMessage: 'Something went wrong!',
        status: false
      });
    }
  }

exports.deleteFavorite = (req, res) => {
    try {
      if (req.body && req.body.id) {
        favourite.findByIdAndUpdate(req.body.id, { is_delete: true }, { new: true }, (err, data) => {
          if (data.is_delete) {
            res.status(200).json({
              status: true,
              title: 'deleted.'
            });
          } else {
            res.status(400).json({
              errorMessage: err,
              status: false
            });
          }
        });
      } else {
        res.status(400).json({
          errorMessage: 'something wrong with it!',
          status: false
        });
      }
    } catch (e) {
      res.status(400).json({
        errorMessage: 'Something went wrong!',
        status: false
      });
    }
  }
// it is for searching the API
exports.getFavorites =  (req, res) => {
    try {
      var query = {};
      query["$and"] = [];
      query["$and"].push({
        is_delete: false,
        user_id: req.user.id
      });

      // for searching specific links 
      if (req.query && req.query.search) {
        query["$and"].push({
          name: { $regex: req.query.search }
        });
      }
      var perPage = 2;
      var page = req.query.page || 1;
      favourite.find(query, { name: 1, id: 1})
        .skip((perPage * page) - perPage).limit(perPage)
        .then((data) => {
          favourite.find(query).count()
            .then((count) => {
  
              if (data && data.length > 0) {
                res.status(200).json({
                  status: true,
                  title: 'retrived',
                  favourite: data,
                  current_page: page,
                  total: count,
                  pages: Math.ceil(count / perPage),
                });
              } else {
                res.status(400).json({
                  errorMessage: 'Not Found Link!!',
                  status: false
                });
              }
  
            });
  
        }).catch(err => {
          res.status(400).json({
            errorMessage: err.message || err,
            status: false
          });
        });
    } catch (e) {
      res.status(400).json({
        errorMessage: 'Something went wrong!',
        status: false
      });
    }
  
  }
