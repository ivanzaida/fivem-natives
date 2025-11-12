import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_COORDS_KEEP_VEHICLE
 *
 * 0x2B083B6FDD0231F9

 * 
 * teleports ped to coords along with the vehicle ped is in
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 */
export function setPedCoordsKeepVehicle(ped: PedIndex, newCoorsX: number, newCoorsY: number, newCoorsZ: number): void {
	const setPedCoordsKeepVehicle_result = Citizen.invokeNative<void>('0x2B083B6FDD0231F9', ped, newCoorsX, newCoorsY, newCoorsZ);
	return setPedCoordsKeepVehicle_result;
}