import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_POWER
 *
 * 0XD203287

 * Gets power being sent to a wheel.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @returns {number}  
 */
export function getVehicleWheelPower(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelPower_result = Citizen.invokeNative<number>('0XD203287', vehicle, wheelIndex);
	return getVehicleWheelPower_result;
}