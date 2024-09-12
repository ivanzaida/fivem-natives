import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_SIZE
 *
 * 0x53AB5C35

 * Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).Only works on non-default wheels.Returns whether change was successful (can be false if trying to set size for non-default wheels).
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to set data for.
 * @param {number} size Size of the wheels (usually between 0.5 and 1.5 is reasonable).
 * @returns {boolean}  Bool - whether change was successful or not
 */
export function setVehicleWheelSize(vehicle: VehicleIndex, size: number): boolean {
	const setVehicleWheelSize_result = Citizen.invokeNative<boolean>('0x53AB5C35', vehicle, size);
	return setVehicleWheelSize_result;
}