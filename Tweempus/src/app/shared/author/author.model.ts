export class Author {
  private _id: string;
  private _url: string;
  private _fullname: string;
  private _image: string;

  constructor(id: string) {
    this._id = id;
    this._url = '';
    this._fullname = 'Author';
    this._image = 'assets/images/google-icon.png';
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }
  public get fullname(): string {
    return this._fullname;
  }
  public set fullname(value: string) {
    this._fullname = value;
  }
  public get image(): string {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }
}
