import { Component } from "react";

export default class HigherOrderFunctions extends Component {
  //progression-1
  constructor() {
    super();
    this.state = {
      userData: [
        {
          id: "1",
          name: "Joe",
          user_type: "Developer",
          age: 31,
          years: 11,
        },
        {
          id: "2",
          name: "Hill",
          user_type: "Designer",
          age: 26,
          years: 4,
        },
        {
          id: "3",
          name: "John",
          user_type: "Teacher",
          age: 24,
          years: 2,
        },
        {
          id: "4",
          name: "Sam",
          user_type: "Entreprenuer",
          age: 58,
          years: 25,
        },
        {
          id: "5",
          name: "Jack",
          user_type: "Designer",
          age: 43,
          years: 18,
        },
      ],
    };
  }

  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <div key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </div>
    ));
    return mapRows;
  };

  //Progression-3

  renderFilteredData = () => {
    const data = this.state.userData;
    const filteredUserData = data.filter((el) => el.user_type === "Designer").map((item) => {
      return (
        <div key={item.id}>
          <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </div>
      );
    });
    return filteredUserData;
  };

//Progression-4
  renderUserWithJ =()=>{
    const data = this.state.userData

    let filteredUserDataWithJ = data.filter((item) => item.name.startsWith('J'))
    return filteredUserDataWithJ.map((item) => {
      return (
        <div key={item.id}>
          <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </div>
      );
    });

  }
//Progression-5
  renderUserBasedOnAge = () => {
    const data = this.state.userData

    let filteredDataBasedOnAge = data.filter((item) => item.age > 28 && item.age <=50)
    return filteredDataBasedOnAge.map((item) => {
      return (
        <div key={item.id}>
          <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </div>
      );
    });
  }


//Progression-6
  renderTotalExperience = () => {
    const data = this.state.userData
    let filteredByExperience = data.filter((item) => item.user_type == "Designer")
    return filteredByExperience.reduce((acc, curr) => acc + curr.years, 0);
};

  render() {
    return (
      <>
        <h1> Higher Order Function</h1>
        <div>
          <h1>Display all items</h1>
          <div className="display-box">
            <ul>{this.renderItems()} </ul>
          </div>
          <div className="display-box">
            <h1>Display based on on user type</h1>
            <ul>{this.renderFilteredData()}</ul>
          </div>
          <div className="display-box">
            <h1>Filter all data starting with the letter J</h1>
            <ul>{this.renderUserWithJ()}</ul>
          </div>
          <div className="display-box">
            <h1>Filter all data starting with the letter J</h1>
            <ul>{this.renderUserBasedOnAge()}</ul>
          </div>
          <h1>Total Experience of Designers</h1>
            <div className="display-box">
                <p>{this.renderTotalExperience()} </p>
            </div>
        </div>
      </>
    );
  }
}
