export class Anuncio {
  constructor(
    public id: string,
    public name: string,
    public ano: string,
    public valor: string,
    public km: string,
    public imagePath: string,
    public combustivel: string,
    public cor: string
  ) {}
}
