import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_ROTATION_SPEED
 *
 * 0XEA1859E5

 * Gets the rotation speed of a wheel.This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @returns {number}  The angular velocity of the wheel.
 */
export function getVehicleWheelRotationSpeed(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelRotationSpeed_result = Citizen.invokeNative<number>('0XEA1859E5', vehicle, wheelIndex);
	return getVehicleWheelRotationSpeed_result;
}