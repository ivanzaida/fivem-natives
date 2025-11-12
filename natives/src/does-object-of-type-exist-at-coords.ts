import { ModelNames } from '@ivanzaida/structures'

/**
 * OBJECT:DOES_OBJECT_OF_TYPE_EXIST_AT_COORDS
 *
 * 0xE10356B235A70E70

 * 
 * p5 is usually 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} radius
 * @param {ModelNames} model
 * @param {boolean} checkPhysicsExists
 * @returns {boolean}  
 */
export function doesObjectOfTypeExistAtCoords(coorsX: number, coorsY: number, coorsZ: number, radius: number, model: ModelNames, checkPhysicsExists: boolean = false): boolean {
	const doesObjectOfTypeExistAtCoords_result = Citizen.invokeNative<boolean>('0xE10356B235A70E70', coorsX, coorsY, coorsZ, radius, model, checkPhysicsExists);
	return doesObjectOfTypeExistAtCoords_result;
}