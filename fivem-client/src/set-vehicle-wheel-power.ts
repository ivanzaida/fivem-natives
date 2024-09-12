import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_POWER
 *
 * 0XC6146043

 * Sets power being sent to a wheel.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @param {number} power
 */
export function setVehicleWheelPower(vehicle: VehicleIndex, wheelIndex: number, power: number): void {
	const setVehicleWheelPower_result = Citizen.invokeNative<void>('0XC6146043', vehicle, wheelIndex, power);
	return setVehicleWheelPower_result;
}