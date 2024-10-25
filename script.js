// script.js

function getSelectedValue() {
    const factCount = document.getElementById('factCount').value;
    return factCount;
}

async function displayCatFacts() {
    console.log('displayCatFacts function called');
    const factCount = getSelectedValue();
    const factsContainer = document.getElementById('factsContainer');
    factsContainer.innerHTML = ''; // Clear previous facts

    try {
        const response = await fetch(`https://catfact.ninja/facts?limit=${factCount}`);
        const data = await response.json();
        const facts = data.data;

        facts.forEach(fact => {
            const factElement = document.createElement('p');
            factElement.textContent = fact.fact;
            factsContainer.appendChild(factElement);
        });
    } catch (error) {
        console.error('Error fetching cat facts:', error);
        factsContainer.textContent = 'Failed to load cat facts. Please try again later.';
    }
}

// Add event listener for button click
document.getElementById('getFactsButton').addEventListener('click', displayCatFacts);

function simulateAsyncOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Async operation complete');
        }, 2000); // Simulate a 2-second delay
    });
}

console.log('Before calling simulateAsyncOperation');

simulateAsyncOperation().then((message) => {
    console.log(message);
});

console.log('After calling simulateAsyncOperation');

async function fetchCatBreeds() {
    try {
        const response = await fetch('https://catfact.ninja/breeds');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cat breeds:', error);
    }
}

// Call the function and log the output
fetchCatBreeds().then((data) => console.log(data));

const samuraiPizzaCats = {
    leader: "Speedy Cerviche",
    members: 3,
    base: {
        location: "Little Tokyo",
        name: "Pizza Cat Restaurant",
    },
    catchphrase: "It's cheese time!",
};

// Destructure without redeclaring 'location'
const { leader, base: { location: baseLocation } } = samuraiPizzaCats;
console.log(`Leader: ${leader}`);
console.log(`Location: ${baseLocation}`);
