/**
 * OBJECT:ARE_ENTITIES_ENTIRELY_INSIDE_GARAGE
 *
 * 0xB7AFC7F5C75DCD56

 * 
 * ------------------------------------------------------------------
 * @param {number} garageHash
 * @param {boolean} peds
 * @param {boolean} vehs
 * @param {boolean} objs
 * @param {number} box
 * @returns {boolean}  
 */
export function areEntitiesEntirelyInsideGarage(garageHash: number, peds: boolean, vehs: boolean, objs: boolean, box: number = 1): boolean {
	const areEntitiesEntirelyInsideGarage_result = Citizen.invokeNative<boolean>('0xB7AFC7F5C75DCD56', garageHash, peds, vehs, objs, box);
	return areEntitiesEntirelyInsideGarage_result;
}