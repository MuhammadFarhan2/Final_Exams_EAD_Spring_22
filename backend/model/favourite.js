var mongoose = require('mongoose');
var Schema = mongoose.Schema;

favoriteSchema = new Schema( {
	name: String,
}),
favorite = mongoose.model('favorite', 
favoriteSchema);

module.exports = favorite;