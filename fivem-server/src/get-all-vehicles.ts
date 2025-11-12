/**
 * CFX:GET_ALL_VEHICLES
 *
 * 0x332169F5

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getAllVehicles(): number {
	const getAllVehicles_result = Citizen.invokeNative<number>('0x332169F5', );
	return getAllVehicles_result;
}