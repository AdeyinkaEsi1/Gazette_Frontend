const newsFeed = {
    sourceIds: [],

    init() {
        this.nigeriaNews(); // Fetch and render news on page load
    },

    nigeriaNews() {
        // const url = "http://localhost:3000/news/nigeria";
        
        const url = "https://gazette-gdqe.onrender.com/news/nigeria";
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(news => {
                if (news.error) {
                    console.error('Error:', news.error);
                    document.getElementById('result').textContent = 'Error fetching news.';
                } else {
                    this.news_sec1 = news.data.slice(0, 10).map(item => ({
                        title: item.title,
                        description: item.description,
                    }));
                    this.news_sec2 = news.data.slice(10, 19).map(item => ({
                        title: item.title,
                        description: item.description,
                    }));
                    this.news_sec3 = news.data.slice(19, 25).map(item => ({
                        title: item.title,
                        description: item.description,
                    }));

                    this.renderNews(); // Render the news immediately after fetching
                }
            })
            .catch(error => {
                console.error('Fetch Error:', error);
                document.getElementById('result').textContent = 'Unable to fetch news. Please try again later.';
            });
    },

    renderNews() {
        if (this.news_sec1 && this.news_sec2 && this.news_sec3) {
            let section1HTML = this.news_sec1
                .map(item => `
                    <div class="news-item">
                        <p class="font-semibold">${item.title}</p>
                        <p>${item.description}</p>
                    </div>
                `)
                .join('');
            document.getElementById('news1-10').innerHTML = section1HTML;

            let section2HTML = this.news_sec2
                .map(item => `
                    <div class="news-item">
                        <p class="font-semibold">${item.title}</p>
                        <p>${item.description}</p>
                    </div>
                `)
                .join('');
            document.getElementById('news2-20').innerHTML = section2HTML;

            let section3HTML = this.news_sec3
                .map(item => `
                    <div class="news-item">
                        <p class="font-semibold">${item.title}</p>
                        <p>${item.description}</p>
                    </div>
                `)
                .join('');
            document.getElementById('news21-25').innerHTML = section3HTML;
        } else {
            document.getElementById('result').textContent = 'No sources available.';
        }
    },
};

newsFeed.init();
