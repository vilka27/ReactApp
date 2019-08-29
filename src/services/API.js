class Api {
  constructor() {
    this.params = ['language=ru',
      'apiKey=568e0f13627645c48300f3fd0bfc0ee0',
      'sources=rbc'];
    this.baseUrl = 'https://newsapi.org/v2/everything?';
  }

  getByTitle(t, title) {
    const { baseUrl } = this;
    const params = this.params.slice();
    params.push('sortBy=relevancy');
    params.push('page=1');
    params.push('pageSize=1');
    params.push(`qInTitle=${title}`);
    const url = baseUrl + params.join('&');
    const req = new Request(url);
    fetch(req)
      .then((response) => response.json())
      .then((post) => {
        if (post.status !== 'error') {
          t.setState({
            item: post.articles[0],
          });
        } else {
          t.setState({
            item: t.state.item,
            error: post.message,
          });
        }
      });
  }

  getByDate(t, date) {
    const { baseUrl } = this;
    const params = this.params.slice();
    params.push(`from=${date}`);
    params.push(`to=${date}`);
    const url = baseUrl + params.join('&');
    const req = new Request(url);
    fetch(req)
      .then((response) => response.json())
      .then((post) => {
        if (post.status !== 'error') {
          t.setState({
            item: post.articles[0],
          });
        } else {
          t.setState({
            item: t.state.item,
            error: post.message,
          });
        }
      });
  }

  getByPage(t, page) {
    const { baseUrl } = this;
    const params = this.params.slice();
    params.push(`page=${page}`);
    params.push(`pageSize=${t.state.pageSize}`);
    const url = baseUrl + params.join('&');
    const req = new Request(url);
    fetch(req)
      .then((response) => response.json())
      .then((post) => {
        const tI = post.totalItems <= 100 ? post.totalResults : 100;
        if (post.status !== 'error') {
          t.setState({
            items: t.state.items,
            currentPage: t.state.currentPage,
            totalItems: t.state.totalItems,
            pageSize: t.state.pageSize,
            error: post.message,
          });
        } else {
          t.setState({
            items: post.articles,
            currentPage: page,
            totalItems: tI,
            pageSize: t.state.pageSize,
          });
        }
      });
  }
}
export default Api;
