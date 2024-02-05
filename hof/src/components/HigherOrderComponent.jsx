import React, { Component } from 'react';

class HigherOrderComponent  extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 },
      ],
    };
  }


  //progression  2
  displayAllItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };


  // progression 3
  dataByUserType = (userType) => {
    const filteredData = this.state.userData.filter((item) => item.user_type === userType);
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };
  


  // progression 4
  dataStartingWithJ = () => {
    const filteredData = this.state.userData.filter((item) => item.name.startsWith('J'));
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };



  // progression 5 
  filterAge = (minAge, maxAge) => {
    const filteredData = this.state.userData.filter((item) => item.age > minAge && item.age <= maxAge);
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };


  // progression 6
  totalExp = (userType) => {
    const filteredDesigners = this.state.userData.filter((item) => item.user_type === userType);
    const totalExperience = filteredDesigners.reduce((acc, item) => acc + item.years, 0);
    return totalExperience;
  };

  render() {
    return (
      <React.Fragment>
        <h2>Display all items</h2>
        <div>
          <ul>{this.displayAllItems()}</ul>
        </div>
  
        <h2>Display based on user type</h2>
        <div>
          <ul>{this.dataByUserType('Designer')}</ul>
        </div>
  
        <h2>Filter all data starting with J</h2>
        <div>
          <ul>{this.dataStartingWithJ()}</ul>
        </div>
  
        <h2>Filter all data based on age greater than 28 and age less than or equal to 50</h2>
        <div>
          <ul>{this.filterAge(28, 50)}</ul>
        </div>
  
        <h2>Find the total years of the designers</h2>
        <p> {this.totalExp('Designer')}</p>
      </React.Fragment>
    );
  }


}

export default HigherOrderComponent ;