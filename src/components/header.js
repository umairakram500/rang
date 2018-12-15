import React, { Component } from 'react';
import { Link } from 'react-dom';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Header extends Component {
    render() {
      return (
        <header className="header-style-1">
            <div className="main-header fixed">

                <div className="container">
                    <div className="row">
                        {/* logo */}
                        <div className="col-xs-12 col-sm-12 col-md-2 logo-holder" id="custom1">
                            <div className="logo"> 
                                <a href="#">
                                    <img src={require("../assets/images/logo.png")} alt="logo" />
                                </a>
                            </div>
                        </div>
                        {/* end:logo */}

                        {/* search */}
                        <div className="col-xs-12 col-sm-12 col-md-5 top-search-holder">
                            <div className="search-area">
                                <form>
                                    <div className="control-group">             
                                        <input className="search-field" placeholder="Search here..." />
                                        <a className="search-button" href="#"></a> 
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* end:search */}


                        {/* cart */}
                        <div className="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row" id="custom1">
                <div className="dropdown dropdown-cart">
                   <a href="#" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
                      <div className="items-cart-inner">
                         <div className="basket"> <i className="glyphicon glyphicon-shopping-cart"></i> </div>
                         <div className="basket-item-count"><span className="count">2</span></div>
                         <div className="total-price-basket"> <span className="lbl">cart -</span> <span className="total-price"> <span className="sign">$</span><span className="value">600.00</span> </span> </div>
                      </div>
                   </a>
                   <ul className="dropdown-menu">
                      <li>
                         <div className="cart-item product-summary">
                            <div className="row">
                               <div className="col-xs-4">
                                  <div className="image"> <a href="#"><img src="assets/images/cart.jpg" alt="" /></a> </div>
                               </div>
                               <div className="col-xs-7">
                                  <h3 className="name"><a href="index.php?page-detail">Simple Product</a></h3>
                                  <div className="price">$600.00</div>
                               </div>
                               <div className="col-xs-1 action"> <a href="#"><i className="fa fa-trash"></i></a> </div>
                            </div>
                         </div>
                         <div className="clearfix"></div>
                         <hr />
                         <div className="clearfix cart-total">
                            <div className="pull-right"> <span className="text">Sub Total :</span><span className="price">$600.00</span> </div>
                            <div className="clearfix"></div>
                            <a href="#" className="btn btn-upper btn-primary btn-block m-t-20">Checkout</a> 
                         </div>
                      </li>
                   </ul>
                </div>
             </div>

                        {/* end:cart */}


                        {/* my account */}
                        <div className="col-xs-12 col-sm-12 col-md-3" id="custom1">
                            <ul style="list-style: none; display: inline-block; margin-top: 15px;">
                                <li style="list-style: none; display: inline-block; padding-right: 15px; padding-top: 4px;"><a href="#" style="color: white;"><i className="icon far fa-user" style="padding: 5px;"></i>My Account</a></li>
                                <li style="list-style: none; display: inline-block;"><a href="#" style="color: white;"><i className="icon far fa-heart" style="padding: 5px;"></i>Wishlist</a></li>
                            </ul>
                        </div>
                        {/* end:my account */}
             
             
                    </div>
                </div>


                
            </div>
        </header>
      );
    }
  }
  
  export default Header;