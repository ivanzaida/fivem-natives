import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_DOES_VEHICLE_HAVE_TOMBSTONE
 *
 * 0x583536248E014455

 * 
 * Returns true only if the "tombstone" bone is attached to the vehicle, irrespective of "FLAG_HAS_TOMBSTONE" being present or not. Detaching the tombstone will return false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getDoesVehicleHaveTombstone(vehicle: VehicleIndex): boolean {
	const getDoesVehicleHaveTombstone_result = Citizen.invokeNative<boolean>('0x583536248E014455', vehicle);
	return getDoesVehicleHaveTombstone_result;
}