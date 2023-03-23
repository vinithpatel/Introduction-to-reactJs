const user = {
  firstName: "vinith",
  lastName: "kumar",
};

const fullName = (user) => user.firstName + " " + user.lastName;

const element = (
  <div>
    <h1 className="greeting">Hello , {fullName(user)}</h1>
    <p>How are you</p>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
