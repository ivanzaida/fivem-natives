/**
 * WEAPON:DOES_AIR_DEFENCE_SPHERE_EXIST
 *
 * 0x8AED94D23435607C

 * 
 * ------------------------------------------------------------------
 * @param {number} sphere
 * @returns {boolean}  
 */
export function doesAirDefenceSphereExist(sphere: number): boolean {
	const doesAirDefenceSphereExist_result = Citizen.invokeNative<boolean>('0x8AED94D23435607C', sphere);
	return doesAirDefenceSphereExist_result;
}