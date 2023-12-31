// API service using Axios from JSONPlaceHolder
// Code 
import axios from 'axios';

export default class BlogService {
  static async fetchAll(limit = 10, page = 1) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return res;
  }

  static async getById(id) {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
    return res;
  }

  static async getCommentById(id) {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return res;
  }

  static async getAuthors() {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    return res;
  }
}
