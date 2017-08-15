class HashMapRenderer {
  static draw(title, map, x, y) {
    fill(0);

    textStyle(BOLD);
    text(title, x, y);
    textStyle(NORMAL);

    Object.keys(map).forEach((k, i) => {
      text(`${k}: ${map[k]}`, x, y + 20 * (i + 1))
    });
  }
}

export default HashMapRenderer;
