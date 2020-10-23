const Product = require('../models/products');

//ADD A PRODUCT TO DB
exports.createProduct = (req, res, next) => {
    const user = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        state: req.body.state,
        image: req.body.image
    });

    user.save().then(
        () => {
            res.redirect('/signin')
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            })
        }
    )
}

// GET A PRODUCT FROM DB
exports.findProduct = (req, res, next) => {
    Product.findOne({
        _id: req.body.id,
    }).then(
        (product) => {
            res.status(200).json(product);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            })
        }
    )
    
};


//UPDATE PRODUCT

exports.updateProduct = (req, res, next) => {
    Product.findOne({
        _id: req.body.id,
    }).then(
        (product) => {
            res.status(200).json(product);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            })
        }
    )
    
};



//DELETE PRODUCT
/*
exports.deleteProduct = (req, res, next) => {
    Product.findOne({
        _id: req.body.id,
    }).then(
        (product) => {
            res.status(200).json(product);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            })
        }
    )
    
};
*/


//DELETE PRODUCT
/*
exports.deleteProduct = (req, res, next) => {
    Product.findOne({
        _id: req.body.id,
    }).then(
        (product) => {
            res.status(200).json(product);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            })
        }
    )
    
};
*/