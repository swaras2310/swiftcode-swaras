var app=angular.module('chatApp',['ngMaterial']);

app.controller('chatController',function ($scope){

	$scope.messages=[
	{
		sender:"USER",
		text:"Hi bot",
		time:"6:02 PM"
	},
	{
		sender:"BOT",
		text:"oh",
		time:"6:02 PM"
	},
	{
		sender:"BOT",
		text:"Hi",
		time:"6:02 PM"
	},
	{
		sender:"USER",
		text:"Hi",
		time:"6:02 PM"
	}
	];

    var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
    exampleSocket.onmessage  =   function  (event) {
           var jsonData = JSON.parse(event.data);
           console.log(jsonData);
       };
})