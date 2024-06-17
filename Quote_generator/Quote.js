document.addEventListener('DOMContentLoaded', async () => {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const newQuoteBtn = document.getElementById('newQuoteBtn');
    const tweetBtn = document.getElementById('tweetBtn');

    // Function to fetch a random quote from the API
    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            // Update DOM with the fetched quote
            quoteElement.textContent = `"${data.content}"`;
            authorElement.textContent = `- ${data.author}`;
        } catch (error) {
            // Handle errors
            console.error('Failed to fetch a quote', error);
            quoteElement.textContent = "Failed to fetch a quote. Please try again later.";
            authorElement.textContent = "";
        }
    }

    // Function to handle click event on "New Quote" button
    newQuoteBtn.addEventListener('click', fetchQuote);

    // Function to handle click event on "Tweet" button
    tweetBtn.addEventListener('click', () => {
        const tweetText = `${quoteElement.textContent} ${authorElement.textContent}`;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        // Open a small popup window with the tweetable content
        const popupWidth = 600;
        const popupHeight = 400;
        const left = (window.innerWidth - popupWidth) / 2;
        const top = (window.innerHeight - popupHeight) / 2;
        window.open(tweetUrl, 'Tweet', `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
    });

    // Immediately fetch a random quote when the page loads
    await fetchQuote();
});
