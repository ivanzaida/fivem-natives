import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_INDICATOR_LIGHTS
 *
 * 0X83070354

 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  An integer.
 */
export function getVehicleIndicatorLights(vehicle: VehicleIndex): number {
	const getVehicleIndicatorLights_result = Citizen.invokeNative<number>('0X83070354', vehicle);
	return getVehicleIndicatorLights_result;
}