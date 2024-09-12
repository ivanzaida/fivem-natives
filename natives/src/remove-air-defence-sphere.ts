/**
 * WEAPON:REMOVE_AIR_DEFENCE_SPHERE
 *
 * 0x54A9A0E1D30B92A5

 * 
 * ------------------------------------------------------------------
 * @param {number} sphere
 * @returns {boolean}  
 */
export function removeAirDefenceSphere(sphere: number): boolean {
	const removeAirDefenceSphere_result = Citizen.invokeNative<boolean>('0x54A9A0E1D30B92A5', sphere);
	return removeAirDefenceSphere_result;
}