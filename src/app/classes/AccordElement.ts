class Element {
  private title: string;
  private htmlElements: React.JSX.Element;
  constructor(title: string, htmlElements: React.JSX.Element) {
    this.title = title;
    this.htmlElements = htmlElements;
  }
  public getHtmlElements() {
    return this.htmlElements;
  }
  public getTitle() {
    return this.title;
  }
}
export default Element;