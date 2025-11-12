import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_VISIBLE
 *
 * 0x4F7C7E268667C7B3

 * 
 * Request results of visibility tracking for a vehicle
 * return TRUE if visibile, FALSE if not.
 * 
 * must be called after TRACK_VEHICLE_VISIBILITY
 * 
 * it's not instant so probabilly must pass an 'update' to see correct result.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleVisible(vehicle: VehicleIndex): boolean {
	const isVehicleVisible_result = Citizen.invokeNative<boolean>('0x4F7C7E268667C7B3', vehicle);
	return isVehicleVisible_result;
}