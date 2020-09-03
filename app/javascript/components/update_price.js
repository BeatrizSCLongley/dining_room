// select container where we add the new price
// find actua price + select number_people
// add eventlistener


// chef if the variable is defined
const initUpdatePrice = () => {
const numberPeople = document.querySelector("#booking_number_people");
const eventPrice = document.querySelector("#event-price");

if (eventPrice) {
  const initialPrice = eventPrice.dataset.price;
}
console.log("hello");
  if (numberPeople) {
    const initialPrice = eventPrice.dataset.price;
    console.log("Hi");
    console.log(numberPeople);
    numberPeople.addEventListener("change", (event) => {
      // add id to price and store inside of an variable (inside of method)

      // console.log(numberPeople.value);
      console.log("EventFired");
      const finalPrice = parseInt(initialPrice, 10) * parseInt(numberPeople.value, 10);
      // console.log(finalPrice);
      eventPrice.innerHTML = finalPrice + ' EUR';
      // store the  multiplied 80 value inside of a var
      // multiply the first value with second
    });
  }
};

export { initUpdatePrice };
