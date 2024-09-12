import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_HEALTH
 *
 * 0X54A677F5

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @returns {number}  
 */
export function getVehicleWheelHealth(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelHealth_result = Citizen.invokeNative<number>('0X54A677F5', vehicle, wheelIndex);
	return getVehicleWheelHealth_result;
}