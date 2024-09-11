import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_NUM_MOD_KITS
 *
 * 0x90E3EAFF8AAA1A42

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getNumModKits(vehicle: VehicleIndex): number {
	const getNumModKits_result = Citizen.invokeNative<number>('0x90E3EAFF8AAA1A42', vehicle);
	return getNumModKits_result;
}