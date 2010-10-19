This repository is a demonstration of how to use Test Driven Development with Javascript.

Test Driven Development is software development process that relies on the repetion of a very short development cycle: first you write a test, watch your tests fail, then refactor your code until the tests pass.  This test-first process is repeated until the application is complete.

There are many different Javascript TDD frameworks, including:

* [qUnit (of jQuery fame)](http://github.com/jquery/qunit)
* [CommonJS assert module specification](http://wiki.commonjs.org/wiki/Unit_Testing/1.0#Assert)
* [jSpec](http://github.com/visionmedia/jspec)

For this demonstration I'll be using qUnit as it has a nice browser based test runner.  The same concepts should apply to other frameworks as well.

I'm also going to assume that you're reasonably familiar with Javascript.  If you aren't I highly recommend these excellent books to get you started:

* [Javascript: The Good Parts by Douglas Crockford](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742/ref=sr_1_1?s=books&ie=UTF8&qid=1287528563&sr=1-1)
* [JavaScript Patterns by Stoyan Stefanov](http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752/ref=sr_1_1?ie=UTF8&s=books&qid=1287528526&sr=1-1-catcorr)
* [Javascript: The Definative Guide by David Flanagan](http://www.amazon.com/JavaScript-Definitive-Guide-David-Flanagan/dp/0596101996/ref=sr_1_1?s=books&ie=UTF8&qid=1287528592&sr=1-1)
* [jQuery in Action: Second Edition by Bear Bibeault and Yehuda Katz](http://www.amazon.com/jQuery-Action-Second-Bear-Bibeault/dp/1935182323/ref=sr_1_1?ie=UTF8&s=books&qid=1287528632&sr=1-1)

To get started we've downloaded qUnit and created a simple scaffolding.

Clone this repository and reset it to the commit your interested in (in this case the first one, ac3e163395):

    $ git clone git@github.com:MarkBennett/IntroToJsTdd.git
    $ git reset <commit>

We've now got five files in our directory:

* my_script.js
* test/index.html
* test/tests.js
* test/qunit/qunit.js
* test/qunit/qunit.css

This scaffolding comes straight from the qUnit repo.

To begin try running your tests by opening *test/index.html* in your browser.  If everything worked you should see a clean test runner.  When you've got it working move on to the next commit to see how we add a new test.
