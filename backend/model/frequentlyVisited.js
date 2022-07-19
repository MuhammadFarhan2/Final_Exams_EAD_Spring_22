var mongoose = require('mongoose');
var Schema = mongoose.Schema;

frequentSchema = new Schema( {
	visit: String,
}),
frequentVisted = mongoose.model('frequent', frequentSchema);

module.exports = frequentVisted;