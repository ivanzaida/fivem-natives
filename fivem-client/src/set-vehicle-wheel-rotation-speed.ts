import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_ROTATION_SPEED
 *
 * 0x35ED100D

 * Sets the rotation speed of a wheel.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @param {number} speed
 */
export function setVehicleWheelRotationSpeed(vehicle: VehicleIndex, wheelIndex: number, speed: number): void {
	const setVehicleWheelRotationSpeed_result = Citizen.invokeNative<void>('0x35ED100D', vehicle, wheelIndex, speed);
	return setVehicleWheelRotationSpeed_result;
}