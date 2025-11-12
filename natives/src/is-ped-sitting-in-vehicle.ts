import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_SITTING_IN_VEHICLE
 *
 * 0xF4244288C3EF3306

 * 
 * Detect if ped is sitting in the specified vehicle
 * [True/False]
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isPedSittingInVehicle(ped: PedIndex, vehicle: VehicleIndex): boolean {
	const isPedSittingInVehicle_result = Citizen.invokeNative<boolean>('0xF4244288C3EF3306', ped, vehicle);
	return isPedSittingInVehicle_result;
}