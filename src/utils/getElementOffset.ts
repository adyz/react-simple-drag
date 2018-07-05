function getElementOffset(el: HTMLElement) {
  const rect: ClientRect = el.getBoundingClientRect();

  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset
  };
}

export default getElementOffset;
