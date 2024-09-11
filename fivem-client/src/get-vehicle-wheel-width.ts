import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_WIDTH
 *
 * 0X9C7B59F9

 * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).Only works on non-default wheels (returns 0 in case of default wheels).
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain data for.
 * @returns {number}  Float representing width of the wheel (usually between 0.1 and 1.5)
 */
export function getVehicleWheelWidth(vehicle: VehicleIndex): number {
	const getVehicleWheelWidth_result = Citizen.invokeNative<number>('0X9C7B59F9', vehicle);
	return getVehicleWheelWidth_result;
}