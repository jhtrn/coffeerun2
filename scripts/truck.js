(function(window) {
  "use strict";
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function(order) {
    /* eslint-disable no-console */
    console.log("Adding order for " + order.emailAddress);
    /* eslint-disable no-console */
    this.db.add(order.emailAddress, order);
  };

  Truck.prototype.deliverOrder = function(customerId) { //customerId = emailAddr
    console.log("Delivering order for " + customerId);
    this.db.remove(customerId);
  };

  Truck.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll());

    console.log("Truck #" + this.truckId + " has pending orders: ");
    customerIdArray.forEach(function(id) {
      console.log(this.db.get(id));
    }.bind(this)); //manually specify what object should be the owner
  };

  App.Truck = Truck;
  window.App = App;
})(window);
