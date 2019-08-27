
   
 function  getApiInfo(t){
        let url = 'https://newsapi.org/v2/top-headlines?' +
            'country=ru&' +
            'apiKey=568e0f13627645c48300f3fd0bfc0ee0';
        let req = new Request(url);
        fetch(req)
            .then(function (response) {
                return response.json();
            })
            .then(function (post) {
                t.setState({items: post.articles, currentItem: null});
            });
    }
export default getApiInfo;