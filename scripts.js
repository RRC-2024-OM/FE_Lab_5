// javascript 

function getSelectedValue() {
    const factCount = document.getElementById('factCount').value;
    return factCount;
}

async function displayCatFacts() {
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

// Call displayCatFacts on button click
document.querySelector('button').addEventListener('click', displayCatFacts);