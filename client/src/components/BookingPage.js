import React, { Component } from 'react';
import moment from 'moment';
import { getToday, getDayOfWeek, getMonthName, getMonthNumber, getDayOfMonth, getYear, getTodayDate, getTomorrowDate, getDayAfterTomorrowDate } from './Dates';
import AppNavbar from './AppNavbar';
import ChooseService from './ChooseService';
import OrderSummary from './OrderSummary';
import LaundryInfo from './LaundryInfo';
import ContactInfo from './ContactInfo';
import PickupLocation from './PickupLocation';
import Payment from './Payment';
import appointmentTimes from '../appointmentTimes';
import { Button } from 'reactstrap';
import axios from 'axios';

class ReturnDate extends Component {
  constructor(props) {
    super(props);
    this.handleReturnDateClick = this.handleReturnDateClick.bind(this);
  }

  handleReturnDateClick(day, month, year) {
    this.props.onReturnDateChange(day, month, year)
  }

  render() {
    const returnDate = this.props.returnDate;
    const dayOfWeek = getDayOfWeek(returnDate);
    const monthName = getMonthName(returnDate);
    const dayOfMonth = new Date(returnDate).getDate();

    return (
      <div>
        <div className="return-time">
          <h1 className="header" >Return Time</h1>
          <h2>Returned on {dayOfWeek}, {monthName} {dayOfMonth}</h2>
          {this.props.service === 'express' &&
            <div>
              <div className="buttons">
                <button
                  className={this.props.returnButton1 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(0), getMonthNumber(0), getYear(0)) }}
                  disabled={this.props.collectedButton2 || this.props.collectedButton3 || this.props.collectedButton4 || this.props.collectedButton5}
                >{getToday(0)} {<br />} {getDayOfMonth(0)}
                </button>
                <button
                  className={this.props.returnButton2 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(1), getMonthNumber(1), getYear(1)) }}
                  disabled={this.props.collectedButton3 || this.props.collectedButton4 || this.props.collectedButton5}
                >{getToday(1)} {<br />} {getDayOfMonth(1)}
                </button>
                <button
                  className={this.props.returnButton3 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(2), getMonthNumber(2), getYear(2)) }}
                  disabled={this.props.collectedButton4 || this.props.collectedButton5}
                >{getToday(2)} {<br />} {getDayOfMonth(2)}
                </button>
                <button
                  className={this.props.returnButton4 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(3), getMonthNumber(3), getYear(3)) }}
                  disabled={this.props.collectedButton5}
                >{getToday(3)} {<br />} {getDayOfMonth(3)}
                </button>
                <button
                  className={this.props.returnButton5 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(4), getMonthNumber(4), getYear(4)) }}
                >{getToday(4)} {<br />} {getDayOfMonth(4)}
                </button>
              </div>
            </div>
          }
          {this.props.service === 'economy' &&
            <div>
              <div className="buttons">
                <button
                  className={this.props.returnButton1 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(2), getMonthNumber(2), getYear(2)) }}
                  disabled={this.props.collectedButton2 || this.props.collectedButton3 || this.props.collectedButton4 || this.props.collectedButton5}
                >{getToday(2)} {<br />} {getDayOfMonth(2)}
                </button>
                <button
                  className={this.props.returnButton2 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(3), getMonthNumber(3), getYear(3)) }}
                  disabled={this.props.collectedButton3 || this.props.collectedButton4 || this.props.collectedButton5}
                >{getToday(3)} {<br />} {getDayOfMonth(3)}
                </button>
                <button
                  className={this.props.returnButton3 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(4), getMonthNumber(4), getYear(4)) }}
                  disabled={this.props.collectedButton4 || this.props.collectedButton5}
                >{getToday(4)} {<br />} {getDayOfMonth(4)}
                </button>
                <button
                  className={this.props.returnButton4 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(5), getMonthNumber(5), getYear(5)) }}
                  disabled={this.props.collectedButton5}
                >{getToday(5)} {<br />} {getDayOfMonth(5)}
                </button>
                <button
                  className={this.props.returnButton5 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(6), getMonthNumber(6), getYear(6)) }}
                >{getToday(6)} {<br />} {getDayOfMonth(6)}
                </button>
              </div>
            </div>
          }

          {this.props.service === 'standard' &&
            <div>
              <div className="buttons">
                <button
                  className={this.props.returnButton1 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(1), getMonthNumber(1), getYear(1)) }}
                  disabled={this.props.collectedButton2 || this.props.collectedButton3 || this.props.collectedButton4 || this.props.collectedButton5}
                >{getToday(1)} {<br />} {getDayOfMonth(1)}
                </button>
                <button
                  className={this.props.returnButton2 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(2), getMonthNumber(2), getYear(2)) }}
                  disabled={this.props.collectedButton3 || this.props.collectedButton4 || this.props.collectedButton5}
                >{getToday(2)} {<br />} {getDayOfMonth(2)}
                </button>
                <button
                  className={this.props.returnButton3 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(3), getMonthNumber(3), getYear(3)) }}
                  disabled={this.props.collectedButton4 || this.props.collectedButton5}
                >{getToday(3)} {<br />} {getDayOfMonth(3)}
                </button>
                <button
                  className={this.props.returnButton4 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(4), getMonthNumber(4), getYear(4)) }}
                  disabled={this.props.collectedButton5}
                >{getToday(4)} {<br />} {getDayOfMonth(4)}
                </button>
                <button
                  className={this.props.returnButton5 ? "button-selected" : "button"}
                  onClick={() => { this.handleReturnDateClick(getDayOfMonth(5), getMonthNumber(5), getYear(5)) }}
                >{getToday(5)} {<br />} {getDayOfMonth(5)}
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

class CollectionDate extends Component {
  constructor(props) {
    super(props);
    this.handleCollectionDateChange = this.handleCollectionDateChange.bind(this);
  }

  handleCollectionDateChange(day, month, year, activeCollected, returnButton1, returnButton2, returnButton3, returnButton4, returnButton5, collectedButton1, collectedButton2, collectedButton3, collectedButton4, collectedButton5) {
    this.props.onCollectionDateChange(day, month, year, activeCollected, returnButton1, returnButton2, returnButton3, returnButton4, returnButton5, collectedButton1, collectedButton2, collectedButton3, collectedButton4, collectedButton5)
  }

  render() {
    const collectionDate = this.props.collectionDate;
    const dayOfWeek = getDayOfWeek(collectionDate);
    const monthName = getMonthName(collectionDate);
    const dayOfMonth = new Date(collectionDate).getDate();

    return (
      <div>
        <div className="collection-time">
          <h1 className="header" >Collection Time</h1>
          <h2>Collected on {dayOfWeek}, {monthName} {dayOfMonth}</h2>
          <div className="buttons">

            <button
              className={this.props.collectedButton1 ? "button-selected" : "button"}
              onClick={() => { this.handleCollectionDateChange(getDayOfMonth(0), getMonthNumber(0), getYear(0), false, true, false, false, false, false, true, false, false, false, false) }}
            >{getToday(0)} {<br />} {getDayOfMonth(0)}
            </button>
            <button
              className={this.props.collectedButton2 ? "button-selected" : "button"}
              onClick={() => { this.handleCollectionDateChange(getDayOfMonth(1), getMonthNumber(1), getYear(1), false, false, true, false, false, false, false, true, false, false, false) }}
            >{getToday(1)} {<br />} {getDayOfMonth(1)}
            </button>
            <button
              className={this.props.collectedButton3 ? "button-selected" : "button"}
              onClick={() => { this.handleCollectionDateChange(getDayOfMonth(2), getMonthNumber(2), getYear(2), false, false, false, true, false, false, false, false, true, false, false) }}
            >{getToday(2)} {<br />} {getDayOfMonth(2)}
            </button>
            <button
              className={this.props.collectedButton4 ? "button-selected" : "button"}
              onClick={() => { this.handleCollectionDateChange(getDayOfMonth(3), getMonthNumber(3), getYear(3), false, false, false, false, true, false, false, false, false, true, false) }}
            >{getToday(3)} {<br />} {getDayOfMonth(3)}
            </button>
            <button
              className={this.props.collectedButton5 ? "button-selected" : "button"}
              onClick={() => { this.handleCollectionDateChange(getDayOfMonth(4), getMonthNumber(4), getYear(4), false, false, false, false, false, true, false, false, false, false, true) }}
            >{getToday(4)} {<br />} {getDayOfMonth(4)}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

class ReturnTime extends Component {
  constructor(props) {
    super(props);
    this.handleReturnTimeClick = this.handleReturnTimeClick.bind(this);
  }

  handleReturnTimeClick(returnTime) {
    this.props.onReturnTimeClick(returnTime)
  }

  render() {
    const addOneDay = moment(getTodayDate(), "MM-DD-YYYY").add(1, 'days').format("MM/DD/YYYY");
    const addTwoDays = moment(getTodayDate(), "MM-DD-YYYY").add(2, 'days').format("MM/DD/YYYY");
    const addThreeDays = moment(getTodayDate(), "MM-DD-YYYY").add(3, 'days').format("MM/DD/YYYY");
    const addFourDays = moment(getTodayDate(), "MM-DD-YYYY").add(4, 'days').format("MM/DD/YYYY");
    const addFiveDays = moment(getTodayDate(), "MM-DD-YYYY").add(5, 'days').format("MM/DD/YYYY");
    const addSixDays = moment(getTodayDate(), "MM-DD-YYYY").add(6, 'days').format("MM/DD/YYYY");
    
    const filteredAppointmentTimes = appointmentTimes.filter(appointmentTime =>
      appointmentTime.date === getTodayDate() || appointmentTime.date === addOneDay || appointmentTime.date === addTwoDays || appointmentTime.date === addThreeDays || appointmentTime.date === addFourDays || appointmentTime.date === addFiveDays || appointmentTime.date === addSixDays 
    );

    return (
      <div>
        <h5>Return Time's Available:</h5>
        <div className="return-appointment-available">
          {filteredAppointmentTimes.map((appointmentTime) => (
            <div
              key={appointmentTime.date + appointmentTime.time + appointmentTime.type}>
              {(appointmentTime.type === "return" && appointmentTime.date === this.props.returnDate) &&
                <button
                  onClick={() => { this.handleReturnTimeClick(appointmentTime.time) }} className="return-time">{appointmentTime.time} - {moment.utc(appointmentTime.time, 'HH:mm').add(1, 'hour').format('HH:mm')}
                </button>
              }
            </div>
          ))}
        </div>
      </div>
    )
  }
}

class CollectionTime extends Component {
  constructor(props) {
    super(props);
    this.handleCollectionTimeClick = this.handleCollectionTimeClick.bind(this);
  }

  handleCollectionTimeClick(collectionTime) {
    this.props.onCollectionTimeClick(collectionTime)
  }

  render() {
    const addOneDay = moment(getTodayDate(), "MM-DD-YYYY").add(1, 'days').format("MM/DD/YYYY");
    const addTwoDays = moment(getTodayDate(), "MM-DD-YYYY").add(2, 'days').format("MM/DD/YYYY");
    const addThreeDays = moment(getTodayDate(), "MM-DD-YYYY").add(3, 'days').format("MM/DD/YYYY");
    const addFourDays = moment(getTodayDate(), "MM-DD-YYYY").add(4, 'days').format("MM/DD/YYYY");
    const addFiveDays = moment(getTodayDate(), "MM-DD-YYYY").add(5, 'days').format("MM/DD/YYYY");
    const addSixDays = moment(getTodayDate(), "MM-DD-YYYY").add(6, 'days').format("MM/DD/YYYY");
    
    const filteredAppointmentTimes = appointmentTimes.filter(appointmentTime =>
      appointmentTime.date === getTodayDate() || appointmentTime.date === addOneDay || appointmentTime.date === addTwoDays || appointmentTime.date === addThreeDays || appointmentTime.date === addFourDays || appointmentTime.date === addFiveDays || appointmentTime.date === addSixDays 
    );

    return (
      <div>
        <h5>Collection Time's Available:</h5>
        <div className="collect-appointment-available">
          {filteredAppointmentTimes.map((appointmentTime) => (
            <div
              key={appointmentTime.date + appointmentTime.time + appointmentTime.type} >
              {(appointmentTime.type === "collection" && appointmentTime.date === this.props.collectionDate) &&
                <button onClick={() => { this.handleCollectionTimeClick(appointmentTime.time) }} className="appointment-time">{appointmentTime.time} - {moment.utc(appointmentTime.time, 'HH:mm').add(1, 'hour').format('HH:mm')}</button>
              }
            </div>
          ))}
        </div>
      </div>
    )
  }
}

class BookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionDate: getTodayDate(),
      collectionTime: '',
      service: 'standard',
      returnDate: getTomorrowDate(),
      returnTime: '',
      activeCollected: true,
      returnButton1: true,
      returnButton2: false,
      returnButton3: false,
      returnButton4: false,
      returnButton5: false,
      collectedButton1: true,
      collectedButton2: false,
      collectedButton3: false,
      collectedButton4: false,
      collectedButton5: false,
      estimatedKG: 1,
      ironed: false,
      shoes: false,
      softener: false,
      numShoes: 1,
      appointments: [],
      clientName: '',
      email: '',
      phoneNumber: '',
      locationName: '',
      roomNumber: '',
      googleId: '',
      googleDisplayName: '',
      appointmentTimes: []
    }
    this.handleChooseServiceClick = this.handleChooseServiceClick.bind(this);
    this.handleCollectionDateChange = this.handleCollectionDateChange.bind(this);
    this.handleReturnDateChange = this.handleReturnDateChange.bind(this);
    this.handleCollectionTimeClick = this.handleCollectionTimeClick.bind(this);
    this.handleReturnTimeClick = this.handleReturnTimeClick.bind(this);
    this.handleOnClickSubmitOrder = this.handleOnClickSubmitOrder.bind(this);
    this.handleOnChangeClientName = this.handleOnChangeClientName.bind(this);
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangePhoneNumber = this.handleOnChangePhoneNumber.bind(this);
    this.handleOnChangeLocation = this.handleOnChangeLocation.bind(this);
    this.handleOnChangeRoomNumber = this.handleOnChangeRoomNumber.bind(this);
  }

  componentDidMount() {
    // Get Appointments from Mongo DB
    axios.get('/api/appointments')
      .then(res => {
        this.setState({
          appointments: res.data[0].appointments
        })
      })
    axios.get('/api/current_user')
      .then(res => {
        this.setState({
          googleDisplayName: res.data.displayName,
          googleId: res.data.googleId
        })
      })
  }

  handleCollectionDateChange(day, month, year, activeCollected, returnButton1, returnButton2, returnButton3, returnButton4, returnButton5, collectedButton1, collectedButton2, collectedButton3, collectedButton4, collectedButton5, ) {
    const addOneDay = () => {
      var addOneDay = new Date(`${month}/${day}/${year}`);
      addOneDay.setDate(addOneDay.getDate() + 1);

      let dd = addOneDay.getDate();
      let mm = addOneDay.getMonth() + 1;
      let yyyy = addOneDay.getFullYear();
      // if (dd < 10) {
      //   dd = '0' + dd
      // }
      if (mm < 10) {
        mm = '0' + mm
      }
      addOneDay = mm + '/' + dd + '/' + yyyy;

      return addOneDay;
    }
    const addTwoDays = () => {
      var addTwoDays = new Date(`${month}/${day}/${year}`);
      addTwoDays.setDate(addTwoDays.getDate() + 2);

      let dd = addTwoDays.getDate();
      let mm = addTwoDays.getMonth() + 1;
      let yyyy = addTwoDays.getFullYear();
      // if (dd < 10) {
      //   dd = '0' + dd
      // }
      if (mm < 10) {
        mm = '0' + mm
      }
      addTwoDays = mm + '/' + dd + '/' + yyyy;

      return addTwoDays;
    }

    if (this.state.service === "standard") {
      this.setState({
        returnDate: addOneDay(),
      })
    }
    else if (this.state.service === "express") {
      this.setState({
        returnDate: `${month}/${day}/${year}`
      })
    }
    else if (this.state.service === "economy") {
      this.setState({
        returnDate: addTwoDays(),
      })
    }
    this.setState({
      collectionDate: `${month}/${day}/${year}`,
      activeCollected: activeCollected,
      returnButton1: returnButton1,
      returnButton2: returnButton2,
      returnButton3: returnButton3,
      returnButton4: returnButton4,
      returnButton5: returnButton5,
      collectedButton1: collectedButton1,
      collectedButton2: collectedButton2,
      collectedButton3: collectedButton3,
      collectedButton4: collectedButton4,
      collectedButton5: collectedButton5,
    })
  }


  handleCollectionTimeClick(collectionTime) {
    this.setState({
      collectionTime: collectionTime
    })
  }

  handleReturnDateChange(day, month, year, returnButton1, returnButton2, returnButton3, returnButton4, returnButton5) {
    this.setState({
      returnDate: `${month}/${day}/${year}`,
      returnButton1: returnButton1,
      returnButton2: returnButton2,
      returnButton3: returnButton3,
      returnButton4: returnButton4,
      returnButton5: returnButton5
    })
  }

  handleReturnTimeClick(returnTime) {
    this.setState({
      returnTime: returnTime
    })
  }

  handleChooseServiceClick(service) {
    if (service === "standard") {
      this.setState({
        returnDate: moment(this.state.collectionDate, "MM-DD-YYYY").add(1, 'days').format("MM/DD/YYYY")
      })
    }
    else if (service === "express") {
      this.setState({
        returnDate: this.state.collectionDate
      })
    }
    else if (service === "economy") {
      this.setState({
        returnDate: moment(this.state.collectionDate, "MM-DD-YYYY").add(2, 'days').format("MM/DD/YYYY")
      })
    }
    this.setState({
      service: service
    })
  }

  // ******************** Contact Info **********************
  handleOnChangeClientName(clientName) {
    this.setState({
      clientName: clientName
    })
  }

  handleOnChangeEmail(email) {
    this.setState({
      email: email
    })
  }

  handleOnChangePhoneNumber(phoneNumber) {
    this.setState({
      phoneNumber: phoneNumber
    })
  }

  // ******************** Location Info **********************

  handleOnChangeLocation(location) {
    this.setState({
      locationName: location
    })
  }

  handleOnChangeRoomNumber(roomNumber) {
    this.setState({
      roomNumber: roomNumber
    })
  }

  // ******************** Laundry Info **********************
  handleOnClickAddKG = () => {
    this.setState(prevState => ({
      estimatedKG: prevState.estimatedKG + 1
    }));
  }

  handleOnClickSubtractKG = () => {
    this.setState(prevState => ({
      estimatedKG: prevState.estimatedKG - 1
    }))
  }

  handleOnClickIroned = () => {
    this.setState({
      ironed: !this.state.ironed
    })
  }

  handleOnClickShoes = () => {
    this.setState({
      shoes: !this.state.shoes
    })
  }

  handleOnClickAddShoes = () => {
    this.setState(prevState => ({
      numShoes: prevState.numShoes + 1
    }));
  }

  handleOnClickSubtractShoes = () => {
    this.setState(prevState => ({
      numShoes: prevState.numShoes - 1
    }))
  }

  handleOnClickSubmitOrder = event => {
    event.preventDefault();
    const order = {
      "service": this.state.service,
      "type": "collection",
      "slots": 3,
      "collectionTime": this.state.collectionTime,
      "collectionDate": this.state.collectionDate,
      "returnTime": this.state.returnTime,
      "returnDate": this.state.returnDate,
      "clientName": this.state.clientName,
      "email": this.state.email,
      "phoneNumber": this.state.phoneNumber,
      "locationName": this.state.locationName,
      "roomNumber": this.state.roomNumber,
      "paymentType": "cash",
      "status": "pending",
      "estimatedKG": this.state.estimatedKG,
      "actualKG": 5,
      "googleId": this.state.googleId
    }

    axios.post('/api/orders', order)
      .then(res => {
        window.location.replace("/order/confirmed/:id");
      })

  }


  render() {
    return (
      <div className="booking-page">
        <AppNavbar />
        <ChooseService
          service={this.state.service}
          onChooseServiceClick={this.handleChooseServiceClick}
        />
        <OrderSummary
          collectionDate={this.state.collectionDate}
          returnDate={this.state.returnDate}
          service={this.state.service}
          estimatedKG={this.state.estimatedKG}
          ironed={this.state.ironed}
          shoes={this.state.shoes}
          softener={this.state.softener}
          numShoes={this.state.numShoes}

        />
        <div className="collect-return">
          Collection Date: {this.state.collectionDate}
          <p>Service Type: {this.state.service}</p>

          <div className="collect">
            <CollectionDate
              onCollectionDateChange={this.handleCollectionDateChange}
              collectionDate={this.state.collectionDate}
              activeCollected={this.state.activeCollected}
              returnButton1={this.state.returnButton1}
              returnButton2={this.state.returnButton2}
              returnButton3={this.state.returnButton3}
              returnButton4={this.state.returnButton4}
              returnButton5={this.state.returnButton5}
              collectedButton1={this.state.collectedButton1}
              collectedButton2={this.state.collectedButton2}
              collectedButton3={this.state.collectedButton3}
              collectedButton4={this.state.collectedButton4}
              collectedButton5={this.state.collectedButton5}
            />
            <CollectionTime
              collectionDate={this.state.collectionDate}
              onCollectionTimeClick={this.handleCollectionTimeClick}
              appointments={this.state.appointments}
            />
          </div>
        </div>

        <div className="collect-return">
          <div className="return">
            <ReturnDate
              returnDate={this.state.returnDate}
              onReturnDateChange={this.handleReturnDateChange}
              service={this.state.service}
              returnButton1={this.state.returnButton1}
              returnButton2={this.state.returnButton2}
              returnButton3={this.state.returnButton3}
              returnButton4={this.state.returnButton4}
              returnButton5={this.state.returnButton5}
              collectedButton1={this.state.collectedButton1}
              collectedButton2={this.state.collectedButton2}
              collectedButton3={this.state.collectedButton3}
              collectedButton4={this.state.collectedButton4}
              collectedButton5={this.state.collectedButton5}
            />
            <ReturnTime
              returnDate={this.state.returnDate}
              onReturnTimeClick={this.handleReturnTimeClick}
              appointments={this.state.appointments}
            />
          </div>
        </div>
        <LaundryInfo
          handleOnClickAddKG={this.handleOnClickAddKG}
          handleOnClickSubtractKG={this.handleOnClickSubtractKG}
          handleOnClickIroned={this.handleOnClickIroned}
          handleOnClickShoes={this.handleOnClickShoes}
          handleOnClickAddShoes={this.handleOnClickAddShoes}
          handleOnClickSubtractShoes={this.handleOnClickSubtractShoes}
          estimatedKG={this.state.estimatedKG}
          ironed={this.state.ironed}
          shoes={this.state.shoes}
          softener={this.state.softener}
          numShoes={this.state.numShoes}
        />
        <ContactInfo
          handleOnChangeClientName={this.handleOnChangeClientName}
          handleOnChangeEmail={this.handleOnChangeEmail}
          handleOnChangePhoneNumber={this.handleOnChangePhoneNumber}
        />
        <PickupLocation
          handleOnChangeLocation={this.handleOnChangeLocation}
          handleOnChangeRoomNumber={this.handleOnChangeRoomNumber}
        />
        <Payment />
        <div className="request-collection">
          <div>
            <Button onClick={this.handleOnClickSubmitOrder} color="primary" size="lg" block>Request Collection</Button>
          </div>
          <p>By placing an order you agree to our terms of service.</p>
          <p>* View a map of our free delivery area. Please do not hesitate to contact us for a quote if you are outside of this area.</p>
        </div>
      </div>
    )
  }
}

export default BookingPage;

