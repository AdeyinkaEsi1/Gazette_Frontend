const newsFeed = {
    sourceIds: [],  // Define sourceIds as an empty array

    init() {
        this.nigeriaNews();
        this.trigger();
    },

    nigeriaNews() {
        const url = "http://localhost:3000/news/newsapi";
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.error) {
                    console.error('Error:', data.error);
                    document.getElementById('result').textContent = 'Error fetching news.';
                } else {
                    this.sourceIds = data.sources.map(source => source.id);
                    document.getElementById('result').textContent = 'No news yet';  // Placeholder message
                }
            })
            .catch(error => {
                console.error('Fetch Error:', error);
                document.getElementById('result').textContent = 'Unable to fetch news. Please try again later.';
            });
    },

    trigger() {
        const trigger = document.getElementById('trigger');

        trigger.addEventListener('click', () => {
            if (this.sourceIds.length > 0) {
                document.getElementById('result').textContent = this.sourceIds.join(', ');
            } else {
                document.getElementById('result').textContent = 'No sources available.';
            }
        });
    },
};

newsFeed.init();
