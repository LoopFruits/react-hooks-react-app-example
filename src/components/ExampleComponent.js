import React from "react";

// no need to modify anything in here. The second test is looking for the returned JSX from this component
function ExampleComponent() {
  return (
    <div className="example">
      <img
        src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif"
        alt="a deeply impressed man, perhaps thinking 'whoa'"
      />
      <p>Whoa!</p>
      {/* <img
        src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif"
        alt="a deeply impressed man, perhaps thinking 'whoa'"
      />
      <p>Whoa!</p> */} // example to show that you can make a second component to show in the dom/localhost
      
    </div>
    
  );
  
}

export default ExampleComponent;
