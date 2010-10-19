
// documentation on writing tests here: http://docs.jquery.com/QUnit
module("my_script");
test('the environment',function(){
  ok(window.DEMO, "the DEMO global should be defined");
});

test('say hello', function(){
  equal(DEMO.sayHello("World"), "Hello, World!", "this should say hello!");
});
