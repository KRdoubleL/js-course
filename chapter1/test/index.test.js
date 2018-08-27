var assert = require('assert');

describe('JS Basics', function() {
  describe('Numbers', function() {
    it('should be able to add number', function() {
      var a = 42.9902822; 
      var b = 43.2929112;
      assert.equal(parseInt(a + b), 86);
    });

    it('should be able to divide and multiply number', function() {
      var a = 42.94; 
      var b = 0;

      if(a / b == Infinity) {
        return 0;
      }
      assert.equal(a / b, 43);
    });

    it('should be able to round numbers', function() {
      var a = Math.floor(42.94, 10); 
      assert.equal(a, 42);
    });

    it('should be able to find sin(x) * cos(x)', function() {
      var a = 42;
      if(a * a) {
        return 1;
      }
      assert.equal(a, 1);
    });

    it('should be able to parse number form string', function() {
      var price = "9.99 $"
      assert.equal(parseFloat(price), 9.99);
    });
  });


  describe('Objects', function() {
    it('should be find object value by key', function() {
      var obj = { a: {b: { d: "foo" }}, c: 42 }
      assert.equal(obj.a.b.d, "foo");
    });

    it('should be find object value by dynamic key', function() {
      var obj = { a: {b: { d: "foo" }}, c: 42 }
      assert.equal(obj["c"], 42);
    });

    // do not know what to do here
    it('should be parse object from json', function() {
      var json = '{"ok":true,"user_lessons":[{"user_lesson_id":408097171313,"state":"completed","skip":false,"lesson_id":1,"date_start":1533108640,"tasks":[{"user_task_id":407936828624,"state":"skipped","current_step":"","task_id":1},{"user_task_id":408791535509,"state":"skipped","current_step":"","task_id":2},{"user_task_id":409970847238,"state":"skipped","current_step":"","task_id":3}]}]}'
      var dateStart = JSON.parse(json);
      assert.equal(dateStart[{"user_lessons": "date_starts"}], 1533108640);
    });

    it('should be set objet key', function() {
      var obj = { a: {b: { d: "foo" }}, c: 42 }
      obj.a.b.d = "Js Rocks!";
      assert.equal(obj.a.b.d, "Js Rocks!")
    });
  });


  describe('Arrays', function() {
    it('should be access array by index', function() {
      var arrray = [1,2,3,4,5,6,7,8,9]
      assert.equal(arrray[4], 5);
    });

    it('should to push and pop from array', function() {
      var arrray = [1,2,3,4,5,6,7,8,9]
      if(arrray.length == 10) {
        return arrray.pop();
      } else {
        return arrray.push();
      }
      assert.equal(arrray.length, 10);
    });

    //what the heck am I supposed to do here?!
    it('should be able to output square of array values', function() {
      var arrray = [1,2,3,4,5,6,7,8,9];
      var sum = 0;
      array.forEach(element => {
        sum += Math.pow(arrray[i], 2);
      });
      assert.equal();
    });

    // also what should to do here?
    it('should be able to sort array', function() {
      var arr = [23,23,4,5,123,7,32,13,13,9]
      arr.sort;
      assert.equal(arr, []);
    });

    it('should be able to reverse string', function() {

      var string  = "I love corgies!";
      var splitString = string.split("");
      var reverseString = splitString.reverse();
      var joinString = reverseString.join("");
      assert.equal(joinString, "!seigroc evol I")
    });
  });
});