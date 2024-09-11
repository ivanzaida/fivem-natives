import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_SIZE
 *
 * 0X4046B66

 * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).Only works on non-default wheels (returns 0 in case of default wheels).
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain data for.
 * @returns {number}  Float representing size of the wheel (usually between 0.5 and 1.5)
 */
export function getVehicleWheelSize(vehicle: VehicleIndex): number {
	const getVehicleWheelSize_result = Citizen.invokeNative<number>('0X4046B66', vehicle);
	return getVehicleWheelSize_result;
}