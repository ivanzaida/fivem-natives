import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_Y_ROTATION
 *
 * 0XC6C2171F

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @param {number} value
 */
export function setVehicleWheelYRotation(vehicle: VehicleIndex, wheelIndex: number, value: number): void {
	const setVehicleWheelYRotation_result = Citizen.invokeNative<void>('0XC6C2171F', vehicle, wheelIndex, value);
	return setVehicleWheelYRotation_result;
}