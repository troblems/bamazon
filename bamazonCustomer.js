
//print to console how many units available, price, department, name, pulled from SQL database
//ask how many they want of each item, return error if not enough. Use cli-table to display
//in table format. Use inquierer to print to screen. Give total price. Update SQL database to reflect
//items purchased.
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root", //Your username
  password: " ", //Your password
  database: "bamazon"
});

function startBuy()
{
connection.query("SELECT * FROM Products", function(error, response)
  {
  if (error) throw error;
   console.log("Welcome to Bamazon! Enjoy your shopping.");
   console.log("What would you like to purchase?")
   var table =
   ({
     head:["ItemID", "ProductName", "DepartmentName", "Price", "StockQuantity"]
   });
 });
startBuy();


function runSearch()
  {
  inquirer.prompt([
    {
      name: "product_ID",
      type: "checkbox",
      message: "Add items to your cart? Press space when highlighted",
      choices:
      [
        "ItemID"
      ]
    }])
    .then(function(answer)
      {if (answer.product_ID === "Continue Shopping?"){}
})
   }
}
