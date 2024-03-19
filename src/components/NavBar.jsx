// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// //I downloaded icons form this page https://fontawesome.com/icons/cart-shopping?f=classic&s=regular
import { useState } from "react";

export default function NavBar({ itemsInCart, user = false }) {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [useshippingAsBilling, setUseShippingAsBilling] = useState(false);
  const [billingAddress, setBillingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [ship, setShip] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleCheckoutClick = () => {
    setShowCheckoutForm(true);
  };

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "shipping") {
      setShip({ ...ship, [name]: value.trim() });
    } else {
      setBillingAddress({ ...billingAddress, [name]: value.trim() });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedShipping = {
      ...ship,
      firstName: ship.firstName.trim(),
      lastName: ship.lastName.trim(),
    };
    const finalBilling = useshippingAsBilling
      ? trimmedShipping
      : {
          ...billingAddress,
          firstName: billingAddress.firstName.trim(),
          lastName: billingAddress.lastName.trim(),
        };
    console.log("Shipping:", trimmedShipping, "Billing:", finalBilling);
  };

  return (
    <>
      {user ? (
        <span>{`Welcome ${user.firstName} ${user.lastName} `}</span>
      ) : (
        <a href="#">Login </a>
      )}
      <button onClick={handleCheckoutClick}>Checkout</button>

      {showCheckoutForm && (
        <form onSubmit={handleSubmit}>
          <h3>Billing Address</h3>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={(e) => handleInputChange(e, "shipping")}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => handleInputChange(e, "shipping")}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={(e) => handleInputChange(e, "shipping")}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={(e) => handleInputChange(e, "shipping")}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            onChange={(e) => handleInputChange(e, "shipping")}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            onChange={(e) => handleInputChange(e, "shipping")}
          />
          <label>
            <input
              type="checkbox"
              checked={useshippingAsBilling}
              onChange={() => setUseShippingAsBilling(!useshippingAsBilling)}
            />
            Use shipping address as billing address
          </label>

          {!useshippingAsBilling && (
            <div>
              <h3>Shipping Address</h3>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={(e) => handleInputChange(e, "billing")}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={(e) => handleInputChange(e, "billing")}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={(e) => handleInputChange(e, "billing")}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={(e) => handleInputChange(e, "billing")}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                onChange={(e) => handleInputChange(e, "billing")}
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                onChange={(e) => handleInputChange(e, "billing")}
              />
            </div>
          )}

          <button type="submit">Submit</button>
        </form>
      )}
      <div>{itemsInCart} items in your Cart</div>
    </>
  );
}
