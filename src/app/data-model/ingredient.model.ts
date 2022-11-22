export class Ingredient {
  public id: number;
  public name: string;
  public energy: number;
  public fats: number;
  public carbs: number;
  public fibers: number;
  public proteins: number;
  public sugar: number;

  constructor(
    id: number,
    name: string,
    energy: number,
    fats: number,
    carbs: number,
    fibers: number,
    proteins: number,
    sugar: number
  ) {
    this.id = id;
    this.name = name;
    this.energy = energy;
    this.fats = fats;
    this.carbs = carbs;
    this.fibers = fibers;
    this.proteins = proteins;
    this.sugar = sugar;
  }
}
