// Import necessary modules for testing
import { updateResults } from './script';

// Describe test suite for updateResults function
describe('updateResults function', () => {
    // Test case to check if updateResults function updates results correctly
    test('should update results with correct vote counts', () => {
        // Mock data for testing
        const votes = [5, 3, 2, 1];
        const options = ['Python', 'JavaScript', 'Java', 'C++'];
        // Create DOM elements for testing
        const resultsElem = document.createElement('div');
        // Call the updateResults function with mock data
        updateResults(votes, options, resultsElem);
        // Assert the results are updated correctly
        expect(resultsElem.innerHTML).toContain('5 votes for Python');
        expect(resultsElem.innerHTML).toContain('3 votes for JavaScript');
        expect(resultsElem.innerHTML).toContain('2 votes for Java');
        expect(resultsElem.innerHTML).toContain('1 votes for C++');
    });
});
