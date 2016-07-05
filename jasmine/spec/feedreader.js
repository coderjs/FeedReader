/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
 
/* All tests are within the $() function since some may require DOM 
 * elements. This will ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This test suite contains a related tests about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This test ensures the allFeeds variable is and not empty. 
         */
        it('has variables defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('has URL defined', function() {
            //for (var i in allFeeds) {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* This test loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is not empty. 
         */
        it('has name defined', function() {
            //for (var i in allFeeds) {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* A new test suite named "The menu" */
    describe('The menu', function() {
        var menuElement;

        beforeEach(function() {
            menuElement = $('.menu-icon-link');
        });
        /* This test ensures the menu element is hidden by default (using HTML/CSS).
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* This test ensures the menu changes visibility when the
         * menu icon is clicked. This test has two expectations: 
              * 1) Does the menu display when clicked?
              * 2) Does it hide when clicked again?
         */

        it('changes visibility when the menu icon is clicked', function() {
            menuElement.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            menuElement.click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

/*
        it('changes visibility when the menu icon is clicked', function() {
            if ($('body').hasClass('menu-hidden')) {
                menuElement.click();

                expect($('body').hasClass('menu-hidden')).toBe(false);
            }

            if (!$('body').hasClass('menu-hidden')) {
                menuElement.click();

                expect($('body').hasClass('menu-hidden')).toBe(true);
            }
        });
*/
    });

    /* This test suite is named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });
        /* This test ensures when the loadFeed function is called and
         * completes its work, there is at least a single .entry element 
         * within the .feed container. loadFeed() is asynchronous so 
         * Jasmine's beforeEach and asynchronous done() function are used.
         */
        //http://stackoverflow.com/questions/2727303/jquery-counting-elements-by-class-what-is-the-best-way-to-implement-this
        //http://blog.bandzarewicz.com/blog/2012/03/08/jasmine-che-sheet/
        it('has at least one .entry in .feed when loadFeed() completes', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            console.log($('.feed .entry').length);
        });
    });

    /* This test suite is named "New Feed Selection" */
    // http://api.jquery.com/html/ In an HTML document, .html() is used to get the contents of any element

    describe('New Feed Selection', function() {
        var oneFeed;

        // Calls `loadFeed` function with callbacks to ensure completed
        // Here, it loads the feed item in index 1
        beforeEach(function(done) {
            loadFeed(1, function() {
            oneFeed = $('.feed').html();
            console.log($('.feed').html());
            done();
            });
        });

        // http://stackoverflow.com/questions/22413009/jasmine-javascript-testing-tobe-vs-toequal   
        // Loads the feed item in index 2
        // By console.logging both feeds we can check that they are not the same
        it('changes content when loadFeed() loads a new feed', function(done) {	
            loadFeed(2, function() {
            console.log($('.feed').html());
            expect(oneFeed).not.toEqual($('.feed').html());
            done();
        });
    });
});
        
}());