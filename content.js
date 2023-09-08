// Content script to interact with the LeetCode page.
// You would need to implement code extraction from LeetCode's editor here.
// This example demonstrates detecting a button click on LeetCode.





document.addEventListener('DOMContentLoaded', function() {

      // Define your XPath expression to select the button element.
    const xpathExpression = '//*[@id="qd-content"]/div[3]/div/div[3]/div/div/div/div/div[2]/div[3]/button[3]';

    // Use document.evaluate() to find the button element.
    const result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    // Check if a result was found.
    if (result.singleNodeValue) {
      
      const leetCodeSubmitButton = result.singleNodeValue;
      leetCodeSubmitButton.addEventListener('click', function() {
        // Your code to handle the click event goes here.
        console.log('Button clicked!');
      });
      
    } else {
      console.error("Button not found using XPath expression.");
    }
  });
  