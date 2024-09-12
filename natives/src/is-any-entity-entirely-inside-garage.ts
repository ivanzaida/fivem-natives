/**
 * OBJECT:IS_ANY_ENTITY_ENTIRELY_INSIDE_GARAGE
 *
 * 0x2ED8EB2145D177F8

 * 
 * ------------------------------------------------------------------
 * @param {number} garageHash
 * @param {boolean} peds
 * @param {boolean} vehs
 * @param {boolean} objs
 * @param {number} box
 * @returns {boolean}  
 */
export function isAnyEntityEntirelyInsideGarage(garageHash: number, peds: boolean, vehs: boolean, objs: boolean, box: number = 1): boolean {
	const isAnyEntityEntirelyInsideGarage_result = Citizen.invokeNative<boolean>('0x2ED8EB2145D177F8', garageHash, peds, vehs, objs, box);
	return isAnyEntityEntirelyInsideGarage_result;
}