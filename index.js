//customer has meals, employers,
//


let store = {customers: [], deliveries: [], employers: [], meals:[]};
//CUSTOMER
let customerId = 0

class Customer {
  constructor (name, employer) {
    this.name = name;
    this.employerId = employer;
    this.mealId = mealId;
    this.deliveryId = deliveryId;
    this.id = ++customerId;
    store.customers.push(this);
  }

  deliveries(){
    return store.deliveries.filter((delivery)=>{
      return delivery.customerId == this.id;
    })
  }

  meals(){
    return this.deliveries().map((delivery)=> {
      return delivery.meal();
    })
  }

}

//MEAL
let mealId = 0

class Meal {
  constructor (title, price) {
    this.price = price;
    this.title = title;
    this.id = ++mealId;
    this.customerId = customerId;
    this.deliveryId = deliveryId;
    store.meals.push(this);
  }
  deliveries(){
    return store.deliveries.filter((delivery) => {
      return delivery.mealId === this.id;
    });
  }
  customers(){
    return this.deliveries().map((delivery) => {
      return delivery.customer()
    });
  }
  static byPrice(price) {
    return store.meals.filter((meal) => {
      return meal.price === price;
    });
  }

}

//DELIVERY
let deliveryId = 0;

class Delivery {
  constructor (meal, customer) {
    this.mealId = mealId;
    this.customerId = customerId;
    this.id = ++deliveryId;
    store.deliveries.push(this);
  }

  customer(){
    return store.customers.find((customer) => {
      return customer.id === this.customerId
    })
  }

  meal(){
    return store.meals.find((meal) => {
      return meal.id === this.mealId
    })
  }
}

//EMPLOYER
let employerId = 0;

class Employer {
  constructor (name) {
    this.name = name;
    this.id = ++employerId;
    store.employers.push(this);
  }

  employees(){
    return store.customers.filter((customer)=> {
      return customer.employerId === this.id;
    })
  }
}
