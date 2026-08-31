import Fuse from 'https://esm.unpkg.com/fuse.js';

export class QuickSearch {
  constructor(data, keys = ['title']) {
    this.fuse = new Fuse(data, { keys, threshold: 0.3 });
  }

  query(searchTerm) {
    return this.fuse.search(searchTerm).map(result => result.item);
  }
}