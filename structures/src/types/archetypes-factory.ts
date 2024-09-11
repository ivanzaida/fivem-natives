import { Vector3 } from "./vector3";

export type ArchetypesFactory = () => {
    flags: number;
    bbMin: Vector3;
    bbMax: Vector3;
    bsCentre: Vector3;
    bsRadius: number;
    name: string;
    textureDictionary: string;
    physicsDictionary: string;
    assetName: string;
    assetType: string;  // Could also be an enum if you have multiple asset types
    lodDist: number;
    specialAttribute: number;
}