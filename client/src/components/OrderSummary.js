import React, { Component } from 'react';
import { getDayOfWeek, getMonthName } from './Dates';


class OrderSummary extends Component {

  render() {
    const collectionDate = this.props.collectionDate;
    const dayOfWeekCollection = getDayOfWeek(collectionDate);
    const monthNameCollection = getMonthName(collectionDate);
    const dayOfMonthCollection = new Date(collectionDate).getDate();

    const returnDate = this.props.returnDate;
    const dayOfWeekReturn = getDayOfWeek(returnDate);
    const monthNameReturn = getMonthName(returnDate);
    const dayOfMonthReturn = new Date(returnDate).getDate();

    let costPerKg = 0;
    
    if(this.props.service === 'economy'){
      costPerKg = 20000
    }
    else if(this.props.service === "standard") {
      costPerKg = 30000
    }
    else if (this.props.service === 'express') {
      costPerKg = 40000
    }

    const costOfWash = this.props.estimatedKG * costPerKg
    
    return (
      <div className="order-summary">
        <div className="fix-this">
          <div className="delivery-details">
            <p>Your laundry will be collected on {dayOfWeekCollection} @ {this.props.collectionTime}, {monthNameCollection} {dayOfMonthCollection} and delivered back to you on {dayOfWeekReturn} @ {this.props.returnTime}, {monthNameReturn} {dayOfMonthReturn} </p>
          </div>
          <div className="delivery-points">
            <p>Weight: {this.props.estimatedKG} kg</p>
            <p>Cost of Wash: {costOfWash} ₫</p>
            <p>Collection:*FREE*</p>
            <p>Delivery:*FREE*</p>
          </div>
          <div className="price-estimate">
            <div> Estimated Cost: {costOfWash} ₫</div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderSummary;