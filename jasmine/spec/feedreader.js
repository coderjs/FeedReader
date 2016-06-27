/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page? (COMPLETE: we get an error stating "expected 0 not to be 0")
         */
        it('has variables defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URL defined', function() {
            for (var i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(0);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has name defined', function() {
            for (var i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe(0);
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        var menuElement;

        beforeEach(function() {
            menuElement = $('.menu-icon-link');
        });
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('changes visibility when the menu icon is clicked', function() {
            if ($("body").hasClass("menu-hidden")) {
                menuElement.click();

                expect($("body").hasClass("menu-hidden")).toBe(false);
            }

            if (!$("body").hasClass("menu-hidden")) {
                menuElement.click();

                expect($("body").hasClass("menu-hidden")).toBe(true);
            }
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        //http://stackoverflow.com/questions/2727303/jquery-counting-elements-by-class-what-is-the-best-way-to-implement-this
        //http://blog.bandzarewicz.com/blog/2012/03/08/jasmine-cheat-sheet/
        it('has at least one .entry in .feed when loadFeed() completes', function(done) {
            var entriesCount = $('.feed').length;
            expect(entriesCount).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    // http://api.jquery.com/html/ In an HTML document, .html() is used to get the contents of any element

    describe('New Feed Selection', function() {
        var oneFeed;

        beforeEach(function(done) {
            oneFeed = $('.feed').html();
            loadFeed(1, function() {
                done();
            });
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        // http://stackoverflow.com/questions/22413009/jasmine-javascript-testing-tobe-vs-toequal
        // By console.logging both feeds it is also evident they are not the same
        it('changes content when loadFeed() loads a new feed', function(done) {
            var twoFeed = $('.feed').html();
            expect(oneFeed).not.toEqual(twoFeed);
            done();
            console.log(oneFeed);
            console.log(twoFeed);
        });
    });
}());