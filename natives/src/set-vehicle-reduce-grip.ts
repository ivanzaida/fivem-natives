import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_REDUCE_GRIP
 *
 * 0xF8EC8E90E8D24CA7

 * 
 * Reduces grip significantly so it's hard to go anywhere.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enableReduceGrip
 */
export function setVehicleReduceGrip(vehicle: VehicleIndex, enableReduceGrip: boolean): void {
	const setVehicleReduceGrip_result = Citizen.invokeNative<void>('0xF8EC8E90E8D24CA7', vehicle, enableReduceGrip);
	return setVehicleReduceGrip_result;
}