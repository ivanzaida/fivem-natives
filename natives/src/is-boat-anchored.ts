import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_BOAT_ANCHORED
 *
 * 0x02B45F7B39143EEA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isBoatAnchored(vehicle: VehicleIndex): boolean {
	const isBoatAnchored_result = Citizen.invokeNative<boolean>('0x02B45F7B39143EEA', vehicle);
	return isBoatAnchored_result;
}