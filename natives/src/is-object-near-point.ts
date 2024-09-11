import { ModelNames } from '@ivanzaida/structures'

/**
 * OBJECT:IS_OBJECT_NEAR_POINT
 *
 * 0x3C38570F42680D56

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} model
 * @param {number} pointX
 * @param {number} pointY
 * @param {number} pointZ
 * @param {number} radius
 * @returns {boolean}  
 */
export function isObjectNearPoint(model: ModelNames, pointX: number, pointY: number, pointZ: number, radius: number): boolean {
	const isObjectNearPoint_result = Citizen.invokeNative<boolean>('0x3C38570F42680D56', model, pointX, pointY, pointZ, radius);
	return isObjectNearPoint_result;
}