import React, { Component } from 'react';
import axios from 'axios';
import "./Form.css";

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            image: "",
            price: 0,
            targetId: null,
            lastPath: ""
        }
    }

    componentDidMount() {
        this.updateCheck();
    }

    componentDidUpdate() {
        if(this.state.lastPath !== this.props.location.pathname) {
            this.setState({
                lastPath: this.props.location.pathname
            })

            this.updateCheck();
        }
    }

    updateCheck() {
        if (this.props.location.pathname.indexOf("/edit/") === 0) {
            // console.log("Yeah,", this.props.match.params.id)

            this.setState({
                targetId: this.props.match.params.id
            });

            this.getProduct(this.props.match.params.id);
        }

        if(this.props.location.pathname.indexOf("/add") === 0) {
            this.clearInputs();
            this.setState({
                targetId: null
            })
        }
    }
    // componentDidUpdate(prevProps) {
    //     const lastId = !prevProps.target ? null : prevProps.target.id;
    //     const currentId = !this.props.target ? null : this.props.target.id;
    //     if (lastId !== currentId) {
    //         this.clearInputs();

    //         const { name, image, price } = this.props.target;
    //         this.setState({
    //             targetId: this.props.target.id,
    //             name: name,
    //             image: image,
    //             price: price
    //         })
    //     }
    // }

    getProduct(id) {
        // console.log("Test id", this.state.targetId)
        axios.get(`/api/info/${id}`)
            .then(response => {
                // console.log(response)
                if(response.data) {
                    this.setState({
                        name: response.data.product_name,
                        image: response.data.product_image,
                        price: Number(response.data.price),
                    })
                }
            })
    }

    nameChanged = (event) => {
        this.setState({
            name: event.target.value
        });
        console.log("Name changed");
    }

    imageChanged = (event) => {
        this.setState({
            image: event.target.value
        });
    }

    priceChanged = (event) => {
        this.setState({
            price: event.target.value
        });
    }

    clearInputs = () => {
        this.setState({
            name: "",
            image: "",
            price: 0
        });
    }

    submitProduct = () => {
        axios.post("/api/product", {
            name: this.state.name,
            image: this.state.image,
            price: this.state.price
        }).then(response => {
            this.clearInputs();

            this.props.history.push(`/`);
        })
    }

    editProduct = () => {
        axios.put(`/api/update/${this.state.targetId}`, {
            name: this.state.name,
            image: this.state.image,
            price: this.state.price
        }).then(response => {
            this.clearInputs();

            this.props.history.push(`/`);
        }).catch(error => console.log(error))
    }

    cancelHit = () => {
        this.clearInputs();

        if (this.state.targetId !== null) {
            this.setState({
                targetId: null
            });

            this.props.history.push("/");
        }
    }

    render() {
        const submitButton = this.state.targetId === null ?
            <button onClick={this.submitProduct}>Add to inventory</button> :
            <button onClick={this.editProduct}>Submit</button>;

        const imageStyling = this.state.image ? {
            backgroundImage: `url(${this.state.image})`,
            backgroundSize: "cover"
        } : {
            backgroundImage: `url(https://img.icons8.com/wired/64/000000/screenshot.png)`
        }

        return (
            <div className="form">
                <div className="form-image" style={imageStyling} />
                <p>Product Name:</p>
                <input type="text" value={this.state.name} onInput={this.nameChanged} placeholder="Name" />
                <p>Image URL:</p>
                <input type="url" value={this.state.image} onInput={this.imageChanged} placeholder="http://" />
                <p>Price</p>
                <input type="text" value={this.state.price} onInput={this.priceChanged} />
                <button onClick={this.cancelHit}>Cancel</button>
                {submitButton}
            </div>
        )
    }
}
