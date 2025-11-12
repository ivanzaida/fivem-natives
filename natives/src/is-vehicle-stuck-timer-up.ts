import { VehicleIndex, EEVehStuckTypes } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_STUCK_TIMER_UP
 *
 * 0xA24B9FF9863A909D

 * 
 * p1 can be anywhere from 0 to 3 in the scripts.
 * p2 being how long in milliseconds the vehicle has been stuck
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EEVehStuckTypes} stuckType
 * @param {number} requiredTime
 * @returns {boolean}  
 */
export function isVehicleStuckTimerUp(vehicle: VehicleIndex, stuckType: EEVehStuckTypes | number, requiredTime: number): boolean {
	const isVehicleStuckTimerUp_result = Citizen.invokeNative<boolean>('0xA24B9FF9863A909D', vehicle, stuckType, requiredTime);
	return isVehicleStuckTimerUp_result;
}