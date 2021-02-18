export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderer(userData) {
    this._container.innerHTML = '';
    this._renderedItems.forEach(item => {
      this._renderer(item, userData);
    });
  }

  addItem(item) {
    this._container.prepend(item)
  }

  setRenderedItems(items) {
    this._renderedItems = items;
  }

}