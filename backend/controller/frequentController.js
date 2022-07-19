exports.saveFrequentLinkVisited = (req, res) => {
    try {
      if (req.body.visit) {
        user.find({ uservisited: req.body.visit }, (err, data) => {
          if (data.length > 0) {
            res.status(200).json({
              Message: 'Link are most visited!',
              status: false
            });

          } else {
            res.status(400).json({
              errorMessage: 'error',
              status: false
            });
          }
        })
      }
    } catch (e) {
      res.status(400).json({
        errorMessage: 'Something went wrong!',
        status: false
      });
    }
  }

