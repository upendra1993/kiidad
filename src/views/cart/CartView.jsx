import React, {Component, lazy} from "react";
import {Link} from "react-router-dom";
import {ReactComponent as IconHeartFill} from "bootstrap-icons/icons/heart-fill.svg";
import {ReactComponent as IconTrash} from "bootstrap-icons/icons/trash.svg";
import {ReactComponent as IconChevronRight} from "bootstrap-icons/icons/chevron-right.svg";
import {ReactComponent as IconChevronLeft} from "bootstrap-icons/icons/chevron-left.svg";
import {ReactComponent as IconTruck} from "bootstrap-icons/icons/truck.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {loadCart, addToCart, reduceFromCart} from "../../helpers/CartManagement";
import axios from "axios";

const CouponApplyForm = lazy(() =>
    import("../../components/others/CouponApplyForm")
);

class CartView extends Component {


    constructor(props) {
        super();
        this.state = {
            cartitem_all_detais: [],
            subTotal: 0
        };
    }

    handleAdd = async (id, price) => {
        addToCart(id, 1, price)
        await this.loadCartItems();
    }

    handleReduce = async (id) => {
        reduceFromCart(id, 1);
        await this.loadCartItems();
    }


    async componentDidMount() {
        await this.loadCartItems()
    }

    loadCartItems = async () => {
        const cartitemsload = loadCart();
        let items = cartitemsload.items;
        console.log('items', items);
        let finalItems = [];
        let subTotal = 0;
        for (const item of items) {
            console.log('item ', item);
            let itemId = item.id;
            console.log(`id ${itemId}`)
            try {
                let {data} = await axios.get(`http://dev.kiidad.com/api/products/get-by-id/${itemId}`);
                console.log('data', data)
                let itemFull = {...data, ...item, total: data.price * item.qty};
                console.log('item full', itemFull)
                finalItems.push(itemFull)
                subTotal += (data.price * item.qty);
            } catch (e) {
                console.log("error fetching data", e);
            }
        }
        this.setState({cartitem_all_detais: finalItems})
        this.setState({subTotal: subTotal})
        console.log("state", finalItems);
    }

    onSubmitApplyCouponCode = async (values) => {
        alert(JSON.stringify(values));
    };

    render() {

        let curencyConverter = (price) => {
            price.toLocaleString('en', {
                style: 'currency',
                currency: 'LKR'
            })
        }

        return (
            <React.Fragment>
                <div className="bg-secondary border-top p-4 text-white mb-3">
                    <h1 className="display-6">Shopping Cart</h1>
                </div>


                <div className="container mb-3">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="card">
                                <div className="table-responsive">
                                    <table className="table table-borderless">
                                        <thead className="text-muted">
                                        <tr className="small text-uppercase">
                                            <th scope="col">Product</th>
                                            <th scope="col" width={120}>
                                                Quantity
                                            </th>
                                            <th scope="col" width={150}>
                                                Price
                                            </th>
                                            <th scope="col" className="text-right" width={130}></th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {this.state.cartitem_all_detais.map(cartitem =>

                                            <tr key={cartitem.id}>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-3 d-none d-md-block">
                                                            <img
                                                                src="../../images/products/tshirt_red_480x400.webp"
                                                                width="80"
                                                                alt="..."
                                                            />
                                                        </div>
                                                        <div className="col">
                                                            <Link
                                                                to="/product/detail"
                                                                className="text-decoration-none"
                                                            >
                                                                {cartitem.name}
                                                            </Link>
                                                            <p className="small text-muted">
                                                                Size: XL, Color: blue, Brand: XYZ
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group input-group-sm mw-140">
                                                        <button
                                                            className="btn btn-primary text-white"
                                                            type="button"
                                                            onClick={()=> this.handleReduce(cartitem.id)}
                                                        >
                                                            <FontAwesomeIcon icon={faMinus}/>
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="1"
                                                            value={cartitem.qty}
                                                        />
                                                        <button
                                                            className="btn btn-primary text-white"
                                                            type="button"
                                                            onClick={() => this.handleAdd(cartitem.id, cartitem.price)}
                                                        >
                                                            <FontAwesomeIcon icon={faPlus}/>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <var className="price">Rs. {cartitem.total}.00</var>
                                                    <small className="d-block text-muted">
                                                        Rs. {cartitem.price} each
                                                    </small>
                                                </td>
                                                <td className="text-right">
                                                    <button className="btn btn-sm btn-outline-secondary mr-2">
                                                        <IconHeartFill className="i-va"/>
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger">
                                                        <IconTrash className="i-va"/>
                                                    </button>
                                                </td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer">
                                    <Link to="/checkout" className="btn btn-primary float-right">
                                        Make Purchase <IconChevronRight className="i-va"/>
                                    </Link>
                                    <Link to="/" className="btn btn-secondary">
                                        <IconChevronLeft className="i-va"/> Continue shopping
                                    </Link>
                                </div>
                            </div>
                            <div className="alert alert-success mt-3">
                                <p className="m-0">
                                    <IconTruck className="i-va mr-2"/> Free Delivery within 1-2
                                    weeks
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <CouponApplyForm onSubmit={this.onSubmitApplyCouponCode}/>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <dl className="row border-bottom">
                                        <dt className="col-6">Total price:</dt>
                                        <dd className="col-6 text-right">Rs. 1,568</dd>

                                        <dt className="col-6 text-success">Discount:</dt>
                                        <dd className="col-6 text-success text-right">-Rs. 58</dd>
                                        <dt className="col-6 text-success">
                                            Coupon:{" "}
                                            <span className="small text-muted">EXAMPLECODE</span>{" "}
                                        </dt>
                                        <dd className="col-6 text-success text-right">-Rs. 68</dd>
                                    </dl>
                                    <dl className="row">
                                        <dt className="col-6">Total:</dt>
                                        <dd className="col-6 text-right  h5">
                                            <strong>Rs. {this.state.subTotal}</strong>
                                        </dd>
                                    </dl>
                                    <hr/>
                                    <p className="text-center">
                                        <img
                                            src="../../images/payment/payments.webp"
                                            alt="..."
                                            height={26}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light border-top p-4">
                    <div className="container">
                        <h6>Payment and refund policy</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// export default function CartView(props){
//    const {CartItems, onAdd, onRemove} = props;
//  return(
//   <aside className="block col-1">
//     <h2>Cart Items</h2>
//     <div>{ CartItems.length === 0 ? <div>Cart is Empty</div>:"Cart in Items"  }</div>
//     {CartItems.map((item)=>{
//       <div key={item.id} className="row">
//         <div className="col-2">{item.name}</div>
//         <div className="col-2">
//         <button onClick={()=>onAdd(item)} className="add">+</button>
//         <button onClick={()=>onRemove(item)} className="remove">-</button>
//         </div>
//         <div className="col-2 text-right">
//           {item.qty} * ${item.price.toFixed(2)}
//         </div>
//       </div>

//     }

//     )}
//   </aside>
//  );
// }
export default CartView;


 

