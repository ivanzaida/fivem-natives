import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_ALARM_TIME_LEFT
 *
 * 0XC108EE6F

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} time
 */
export function setVehicleAlarmTimeLeft(vehicle: VehicleIndex, time: number): void {
	const setVehicleAlarmTimeLeft_result = Citizen.invokeNative<void>('0XC108EE6F', vehicle, time);
	return setVehicleAlarmTimeLeft_result;
}