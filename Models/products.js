const mongoose = require('mongoose');

const productsSchema = mongoose.Schema ({
    name:  {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    state: {type: String},
    image: {type: String, required: true}
    
});


module.exports = mongoose.model('Product', productSchema);