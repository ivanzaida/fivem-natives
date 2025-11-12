import { ModelNames } from '@ivanzaida/structures'

/**
 * OBJECT:SET_TINT_INDEX_CLOSEST_BUILDING_OF_TYPE
 *
 * 0x44EFE8009F436110

 * 
 * Grabs the closest building with the specified model and sets tint index on it.
 * If no object is found in the range or other error, then returns FALSE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} scrVecCentreCoorsX
 * @param {number} scrVecCentreCoorsY
 * @param {number} scrVecCentreCoorsZ
 * @param {number} radius
 * @param {ModelNames} objectModelHashKey
 * @param {number} tint
 * @returns {boolean}  
 */
export function setTintIndexClosestBuildingOfType(scrVecCentreCoorsX: number, scrVecCentreCoorsY: number, scrVecCentreCoorsZ: number, radius: number, objectModelHashKey: ModelNames, tint: number): boolean {
	const setTintIndexClosestBuildingOfType_result = Citizen.invokeNative<boolean>('0x44EFE8009F436110', scrVecCentreCoorsX, scrVecCentreCoorsY, scrVecCentreCoorsZ, radius, objectModelHashKey, tint);
	return setTintIndexClosestBuildingOfType_result;
}