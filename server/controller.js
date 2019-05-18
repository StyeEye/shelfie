exports.productPost = function (req, res, next) {
    console.log(req.body.name, req.body.image, req.body.price);

    const db = req.app.get("db");
    const { name, image, price } = req.body;

    const newProduct = {
        productName: name,
        productImage: image,
        price: price
    };

    db.create_product(newProduct)
        .then(data => {
            // db.get_inventory()
            //     .then(data => {
            //         res.send(data);
            //     });
            res.status(200).send("Worked");
        })
        .catch(error => {
            console.log(`Something went wrong: ${error}`)
            res.status(401);
        });
}

exports.editProduct = function (req, res, next) {
    const db = req.app.get("db");
    const {name, image, price } = req.body;

    const changes = {
        product_name: name,
        product_image: image,
        price: Number(price)
    };

    db.products.update({id: parseInt(req.params.id)}, changes)
        .then( result => {
            console.log("Updated", result);
            res.sendStatus(200);
        });
}