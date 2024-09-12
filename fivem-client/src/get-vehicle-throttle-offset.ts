import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_THROTTLE_OFFSET
 *
 * 0xD1D07351

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  A float among -1 and 1 according if the vehicle is moving forwards or backwards
 */
export function getVehicleThrottleOffset(vehicle: VehicleIndex): number {
	const getVehicleThrottleOffset_result = Citizen.invokeNative<number>('0xD1D07351', vehicle);
	return getVehicleThrottleOffset_result;
}