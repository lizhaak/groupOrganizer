'use strict';

var teamSalary = [];
var designTeamSalary = [];
var devTeamSalary = [];
var salesTeamSalary = [];

$(document).ready(init);

function init(){
	$('#addPerson').on('click', addPersonSalary);
	$('#allLists').on('click', '.personInfo', clickPerson);
	$('#allLists').on('click', '.holder', clickHolder);
}

function addPersonSalary(){
	var dash = " - $";
	var $salary = $('#salary').val();
	var $newName = $('<div>').addClass('personInfo');
	$newName = $newName.append($('#name').val());
	$newName = $newName.append(dash);
	$newName = $newName.append($('#salary').val());
	$newName = $newName.attr('value', $salary);
	teamSalary.push($newName.attr('value'));      
	var total = 0;
	for(var i = 0; i < teamSalary.length; i++){
		total += parseInt(teamSalary[i]);
	}
	$('#total').val('');
	$('#total').text("Total Salary: " + "$"+ parseInt(total));
	$('#unsorted').append($newName);
	$('.clearField').val('');  //clears out input fields
}

function clickPerson(event){
	event.stopPropagation();
	var $this = $(this);
	var wasSelected = $this.hasClass('selected');
	$('.personInfo').removeClass('selected');
	if(!wasSelected){
		$this.addClass('selected');
	}
}

function clickHolder(event){
	var $this = $(this);
	console.log('attr: ', $('.selected').attr('value'));
	$('.selected').appendTo($this);
	if( $('.selected').parent().attr('id') == 'unsorted'){
		teamSalary.push($('.selected').attr('value'));
	}
	if( $('.selected').parent().attr('id') == 'designTeam'){
		designTeamSalary.push($('.selected').attr('value'));
	}
	if( $('.selected').parent().attr('id') == 'devTeam'){
		devTeamSalary.push($('.selected').attr('value'));
	}
	if( $('.selected').parent().attr('id') == 'salesTeam'){
		salesTeamSalary.push($('.selected').attr('value'));
	}
	totalSum();
	$('.selected').removeClass('selected');
}

function totalSum(){
	var total = 0;
	for(var i = 0; i < teamSalary.length; i++){
		total += parseInt(teamSalary[i]);
	}
	$('#total').val('');
	$('#total').text("Total Salary: " + "$"+ parseInt(total));
	
	var total1 = 0;
	for(var i = 0; i < designTeamSalary.length; i++){
		total1 += parseInt(designTeamSalary[i]);
	}
	$('#totalDesign').val('');
	$('#totalDesign').text("Total Salary: " + "$"+ parseInt(total1));

	var total2 = 0;
	for(var i = 0; i < devTeamSalary.length; i++){
		total2 += parseInt(devTeamSalary[i]);
	}
	$('#totalDev').val('');
	$('#totalDev').text("Total Salary: " + "$"+ parseInt(total2));

	var total3 = 0;
	for(var i = 0; i < salesTeamSalary.length; i++){
		total3 += parseInt(salesTeamSalary[i]);
	}
	$('#totalSales').val('');
	$('#totalSales').text("Total Salary: " + "$"+ parseInt(total3));
}