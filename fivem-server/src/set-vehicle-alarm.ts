import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_ALARM
 *
 * 0X24877D84

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} alarmSet
 */
export function setVehicleAlarm(vehicle: VehicleIndex, alarmSet: boolean): void {
	const setVehicleAlarm_result = Citizen.invokeNative<void>('0X24877D84', vehicle, alarmSet);
	return setVehicleAlarm_result;
}