(function (win, doc) {
  // utility functions
  const get = sel => {
    return [...doc.querySelectorAll(sel)];
  };
  const make = (type, props = {}) => {
    const thing = doc.createElement(type);
    Object.keys(props).forEach(key => {
      thing[key] = props[key];
    });
    return thing;
  }

  // create stuff
  const map = make('div', {
    className: 'map',
  });
  const hero = make('div', {
    className: 'hero',
  });

  // add stuff to the page
  map.appendChild(hero);
  doc.body.appendChild(map);

  // attach behaviors
  // TODO

}(window, window.document));
