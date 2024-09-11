/**
 * OBJECT:CLEAR_OBJECTS_INSIDE_GARAGE
 *
 * 0xC175C00B24E2628F

 * 
 * ------------------------------------------------------------------
 * @param {number} garageHash
 * @param {boolean} vehicles
 * @param {boolean} peds
 * @param {boolean} objects
 * @param {boolean} broadcast
 */
export function clearObjectsInsideGarage(garageHash: number, vehicles: boolean, peds: boolean, objects: boolean, broadcast: boolean = false): void {
	const clearObjectsInsideGarage_result = Citizen.invokeNative<void>('0xC175C00B24E2628F', garageHash, vehicles, peds, objects, broadcast);
	return clearObjectsInsideGarage_result;
}