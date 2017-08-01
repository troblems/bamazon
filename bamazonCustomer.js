
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root", //Your username
  password: "root", //Your password
  database: "Bamazon"
});

function startBuy()
{
connection.query("SELECT * FROM Products", function(error, response)
{
  if (error) throw error;
   console.log(Welcome to Bamazon! Enjoy your shopping.);

});

  var table = new Table
  ({
    head:["ItemID", "ProductName", "DepartmentName", "Price", "StockQuantity"]
  });


function runSearch()
  {
  inquirer.prompt;
    {
      name: "product_ID",
      type: "checkbox",
      message: "Add items to your cart? Press space when highlighted",
      choices:
      [
        "ItemID"
      ]
    }
    .then(function(answer)
     {if (answer.product_ID === "Continue Shopping?")}

}
}
