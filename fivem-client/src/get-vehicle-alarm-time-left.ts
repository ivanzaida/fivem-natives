import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_ALARM_TIME_LEFT
 *
 * 0XC62AAC98

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleAlarmTimeLeft(vehicle: VehicleIndex): number {
	const getVehicleAlarmTimeLeft_result = Citizen.invokeNative<number>('0XC62AAC98', vehicle);
	return getVehicleAlarmTimeLeft_result;
}