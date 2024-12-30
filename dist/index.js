const newsFeed = {
    init() {
        this.unitedStateNews();
    },

    unitedStateNews() {
        const url = "http://localhost:3000/news/newsapi/us1";
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
                    document.getElementById('news-title1').textContent = 'Error fetching news.';
                } else {
                    this.news_sec1 = news.articles.slice(0, 11).map(item => ({
                        title: item.title,
                        description: item.description,
                    }));
                    this.news_sec2 = news.articles.slice(11, 21).map(item => ({
                        title: item.title,
                        description: item.description,
                    }));
                    this.news_sec3 = news.articles.slice(19, 25).map(item => ({
                        title: item.title,
                        description: item.description,
                    }));

                    this.renderNews();
                }
            })
            .catch(error => {
                console.error('Fetch Error:', error);
                this.renderDummy();
            });
    },

    renderDummy() {
        const localstorageKey = 'LOCAL STORAGE DATA'
        let sec1 = this.news_sec1
        localStorage.setItem(localstorageKey, 'LOCAL DATA');
        const storedData = localStorage.getItem(localstorageKey);
        document.getElementById('news-title1').innerHTML = storedData
    },

    // let section1HTML = this.news_sec1
    //     .map(item => `
    //         <div class="news-item">
    //             <p class="font-semibold">${item.title}</p>
    //             <p>${item.description}</p>
    //         </div>
    //         `)
    //     .join('');
    // document.getElementById('news1-10').innerHTML = section1HTML

    renderNews() {
        if (this.news_sec1 && this.news_sec2 && this.news_sec3) {
            const newsContainer1 = document.getElementById('news1');
            newsContainer1.innerHTML = '';
            this.news_sec1.forEach(item => {
                const titleElement = document.createElement('div');
                titleElement.className = 'font-semibold';
                titleElement.textContent = item.title || "No Title";

                const descElement = document.createElement('div');
                descElement.className = '';
                descElement.textContent = item.description || "No Description";

                newsContainer1.appendChild(titleElement);
                newsContainer1.appendChild(descElement)
            });

            const newsContainer2 = document.getElementById('news2');
            newsContainer2.innerHTML = '';
            this.news_sec2.forEach(item => {
                const titleElement = document.createElement('div');
                titleElement.className = 'font-semibold';
                titleElement.textContent = item.title || "No Title";

                const descElement = document.createElement('div');
                descElement.className = '';
                descElement.textContent = item.description || "No Description";

                newsContainer2.appendChild(titleElement);
                newsContainer2.appendChild(descElement)
            });

            const newsContainer3 = document.getElementById('news3');
            newsContainer3.innerHTML = '';
            this.news_sec3.forEach(item => {
                const titleElement = document.createElement('div');
                titleElement.className = 'font-semibold';
                titleElement.textContent = item.title || "No Title";

                const descElement = document.createElement('div');
                descElement.className = '';
                descElement.textContent = item.description || "No Description";

                newsContainer3.appendChild(titleElement);
                newsContainer3.appendChild(descElement)
            });

        } else {
            document.getElementById('result').textContent = 'No sources available.';
        }
        function renderlocalStorageData() {
            const localstorageKey = 'LOCAL STORAGE INFO'
            localStorage.setItem(localstorageKey, 'LOCAL DATA')
            const storedData = localStorage.getItem(localstorageKey)
            document.getElementById('news-title1')
        }
    },

};

newsFeed.init();
