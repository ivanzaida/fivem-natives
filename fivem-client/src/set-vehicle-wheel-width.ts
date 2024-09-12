import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_WIDTH
 *
 * 0X64C3F1C0

 * Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).Only works on non-default wheels.Returns whether change was successful (can be false if trying to set width for non-default wheels).
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to set data for.
 * @param {number} width Width of the wheels (usually between 0.1 and 1.5 is reasonable).
 * @returns {boolean}  Bool - whether change was successful or not
 */
export function setVehicleWheelWidth(vehicle: VehicleIndex, width: number): boolean {
	const setVehicleWheelWidth_result = Citizen.invokeNative<boolean>('0X64C3F1C0', vehicle, width);
	return setVehicleWheelWidth_result;
}