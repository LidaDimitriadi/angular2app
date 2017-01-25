describe('First test', function () {

    beforeEach(function () {
        browser.waitForAngular();
        browser.get('localhost://3000');
    });

    it('should display correct title', function () {
        expect(browser.getTitle()).toEqual('Angular 2 Testing');
    });
    browser.driver.manage().window().setSize(1920, 1040);
    // URL: 
    element(by.css('nav>div>ul>li:nth-of-type(2)>a')).click();
    // URL: 
    element(by.css('input')).click();
    // URL: 
    element(by.css('input')).sendKeys('ab');
    // URL: 
    element(by.css('th:nth-of-type(1)>button')).click();
    // URL: 
    element(by.css('td:nth-of-type(2)>a')).click();
    // URL: 
    element(by.css('button:nth-of-type(2)')).click();
    // URL: 
    element(by.css('td:nth-of-type(2)>a')).click();
    // URL: 
    element(by.css('input')).click();

    element(by.css('input')).sendKeys('second review');
    // URL: 
    element(by.css('div:nth-of-type(11)>button')).click();


     it('should log to the console', function() {
        console.log("did it");
        expect(true).toBeTruthy(); 
  });
});