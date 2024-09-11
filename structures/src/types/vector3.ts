export interface IVector2 {
  x: number;
  y: number;
}

// Source: https://raw.githubusercontent.com/you21979/typescript-vector/master/vector3.ts
export interface IVector3 extends IVector2 {
  z: number;
}

export type TVector3 = Vector3 | IVector3;
export class Vector3 implements IVector3 {
  public static get zero(): Vector3 {
    return new Vector3(0, 0, 0);
  }

  public static create(v1: IVector3 | number): Vector3 {
    if (typeof v1 === 'number') return new Vector3(v1, v1, v1);
    return new Vector3(v1.x, v1.y, v1.z);
  }

  /**
   * Creates a vector from an array of numbers
   * @param primitive An array of numbers (usually returned by a native)
   * @example ```ts
   * const entityPos = Vector3.fromArray(GetEntityCoords(entity))
   * ```
   */
  public static fromArray(primitive: [number, number, number] | number[]): Vector3 {
    return new Vector3(primitive[0], primitive[1], primitive[2]);
  }

  public static parse(vector: IVector3): Vector3 {
    return new Vector3(vector.x, vector.y, vector.z);
  }

  /**
   * Creates an array of vectors from an array number arrays
   * @param primitives A multi-dimensional array of number arrays
   * @example ```ts
   * const [forward, right, up, position] = Vector3.fromArrays(GetEntityMatrix(entity))
   * ```
   */
  public static fromArrays(primitives: [number, number, number][] | number[][]): Vector3[] {
    return primitives.map((prim) => new Vector3(prim[0], prim[1], prim[2]));
  }

  public static clone(v1: IVector3): Vector3 {
    return Vector3.create(v1);
  }

  public static equals(v1: Vector3, v2: Vector3): boolean {
    return v1.x == v2.x && v1.y == v2.y && v1.z == v2.z;
  }

  public static add(v1: TVector3, v2: TVector3 | number): Vector3 {
    if (typeof v2 === 'number') return new Vector3(v1.x + v2, v1.y + v2, v1.z + v2);
    return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
  }

  public static addX(vec: TVector3, x: number): Vector3 {
    return new Vector3(vec.x + x, vec.y, vec.z);
  }

  public static addY(vec: TVector3, y: number): Vector3 {
    return new Vector3(vec.x, vec.y + y, vec.z);
  }

  public static addZ(vec: TVector3, z: number): Vector3 {
    return new Vector3(vec.x, vec.y, vec.z + z);
  }

  public static subtract(v1: TVector3, v2: TVector3 | number): Vector3 {
    if (typeof v2 === 'number') return new Vector3(v1.x - v2, v1.y - v2, v1.z - v2);
    return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
  }

  public static multiply(v1: TVector3, v2: TVector3 | number): Vector3 {
    if (typeof v2 === 'number') return new Vector3(v1.x * v2, v1.y * v2, v1.z * v2);
    return new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
  }

  public static divide(v1: TVector3, v2: TVector3 | number): Vector3 {
    if (typeof v2 === 'number') return new Vector3(v1.x / v2, v1.y / v2, v1.z / v2);
    return new Vector3(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
  }

  public static dotProduct(v1: TVector3, v2: TVector3): number {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  }

  public static crossProduct(v1: TVector3, v2: TVector3): Vector3 {
    const x = v1.y * v2.z - v1.z * v2.y;
    const y = v1.z * v2.x - v1.x * v2.z;
    const z = v1.x * v2.y - v1.y * v2.x;
    return new Vector3(x, y, z);
  }

  public static normalize(v: Vector3): Vector3 {
    return Vector3.divide(v, v.length);
  }

  constructor(
    public x: number,
    public y: number,
    public z: number,
  ) {}

  public clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  /**
   * The product of the Euclidean magnitudes of this and another Vector3.
   *
   * @param v Vector3 to find Euclidean magnitude between.
   * @returns Euclidean magnitude with another vector.
   */
  public distanceSquared(v: TVector3): number {
    const w: Vector3 = this.subtract(v);
    return Vector3.dotProduct(w, w);
  }

  /**
   * The distance between two Vectors.
   *
   * @param v Vector3 to find distance between.
   * @returns Distance between this and another vector.
   */
  public distance(v: TVector3): number {
    return Math.sqrt(this.distanceSquared(v));
  }

  public get normalize(): Vector3 {
    return Vector3.normalize(this);
  }

  public crossProduct(v: TVector3): Vector3 {
    return Vector3.crossProduct(this, v);
  }

  public dotProduct(v: TVector3): number {
    return Vector3.dotProduct(this, v);
  }

  public add(v: TVector3 | number): Vector3 {
    return Vector3.add(this, v);
  }

  public addX(x: number): Vector3 {
    return Vector3.addX(this, x);
  }
  public addY(y: number): Vector3 {
    return Vector3.addY(this, y);
  }
  public addZ(z: number): Vector3 {
    return Vector3.addZ(this, z);
  }

  public subtract(v: TVector3): Vector3 {
    return Vector3.subtract(this, v);
  }

  public multiply(v: TVector3 | number): Vector3 {
    return Vector3.multiply(this, v);
  }

  public divide(v: TVector3 | number): Vector3 {
    return Vector3.divide(this, v);
  }

  public toArray(): [number, number, number] {
    return [this.x, this.y, this.z];
  }

  public replace(v: TVector3): void {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
  }

  public get length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  public toString(): string {
    return `Vector3(${this.x}, ${this.y}, ${this.z})`;
  }

  public static getAngleDifference(sourcePos: Vector3, targetPos: Vector3, headingDegrees: number): number {
    const direction = targetPos.subtract(sourcePos);
    const targetHeading = Math.atan2(direction.y, direction.x) * (180 / Math.PI) + 90;

    let headingDifference = targetHeading - headingDegrees - 180;
    if (headingDifference > 180) {
      headingDifference -= 360;
    }
    if (headingDifference < -180) {
      headingDifference += 360;
    }
    return headingDifference;
  }
}
