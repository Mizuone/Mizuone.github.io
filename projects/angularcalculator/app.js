"use strict";
var app = angular.module('JSCal', []);
app.controller('MainController', ['$scope',
	function($scope) {
        $scope.title = 'JS Calculator';
        $scope.totalnumber = 0;
        $scope.numbersequence = [];
        let isAddition = 0;
        let isSubtraction = 0;
        let isDivision = 0;
        let isMultiply = 0;
        let isDecimal = 0;

        //display sequence in number display
        $scope.showSequence = function() {
            //displays the array sequence and sets it total
            $scope.sequenceDisplay = $scope.numbersequence.join("").trim(",");

            let hideTotal = document.querySelector("#maincontainer .totalnum");
            let showSequence = document.querySelector("#maincontainer .numsequence");
            showSequence.style.display = "block";
            hideTotal.style.display = "none";
        }
        //adds a number to the array
        $scope.clearEntry = function() {
            $scope.numbersequence.pop();
            $scope.showSequence();
            if ($scope.numbersequence.length <= 0 ) {
                let hideSequence = document.querySelector("#maincontainer .numsequence");
                let showTotal = document.querySelector(".totalnum");
                showTotal.style.display = "block";
                hideSequence.style.display = "none";
            }
        }
        $scope.allClear = function() {
            $scope.totalnumber = 0;
            let hideSequence = document.querySelector("#maincontainer .numsequence");
            let showTotal = document.querySelector(".totalnum");
            showTotal.style.display = "block";
            hideSequence.style.display = "none";
            $scope.numbersequence = [];
            resetIsValues();
        }
        $scope.addToSequence = function(seq) {
                $scope.numbersequence.push(seq);
                $scope.showSequence();
        }
        //calculates array positions checking for a pattern
        $scope.addTotal = function(sequence) {

            let showTotal = document.querySelector("#maincontainer .totalnum");
            let hideSequence = document.querySelector("#maincontainer .numsequence");



            sequence !== "=" ? $scope.numbersequence.push(sequence) : false;
            hideSequence.style.display = "none";
            showTotal.style.display = "block";

            for (let i = 0; i < $scope.numbersequence.length; i++) {
                //pattern check
                isAddition = evaluateArray(i, isAddition, $scope.numbersequence, sequence);
                isSubtraction = evaluateArray(i, isSubtraction, $scope.numbersequence, sequence);
                isMultiply = evaluateArray(i, isMultiply, $scope.numbersequence, sequence);
                isDivision = evaluateArray(i, isDivision, $scope.numbersequence, sequence);
                isDecimal = evaluateArray(i, isDecimal, $scope.numbersequence, sequence);
            }
        }
        //evaluates the array values using the eval method
        //Used primarily in for loops or anything with an incrementor
        //totals all elements and sets to totalnumber, and resets all values used in function
        //Ex: evaluateArray(i, isAddition, numArray, seqThatIsEqual);
        function evaluateArray(incrementor, isOperator, arr, seq) {
            if ( typeof arr[incrementor] === "number" &&
                     seq === "=" && isOperator === 0) {

                    let addElements = eval(arr.join("").trim(","));
                    $scope.totalnumber = addElements;
                    isOperator = 0;
                    $scope.numbersequence = [];
                    $scope.numbersequence.push($scope.totalnumber);
                }
            return isOperator;
        }
        //resets all is conditions on clear or reset button clicks
        function resetIsValues() {
            isAddition = 0;
            isSubtraction = 0;
            isDivision = 0;
            isMultiply = 0;
            isDecimal = 0;
        }
  }]);
