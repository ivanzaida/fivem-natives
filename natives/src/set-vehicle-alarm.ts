import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ALARM
 *
 * 0xD45558BDBDE86734

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} alarmSet
 */
export function setVehicleAlarm(vehicle: VehicleIndex, alarmSet: boolean): void {
	const setVehicleAlarm_result = Citizen.invokeNative<void>('0xD45558BDBDE86734', vehicle, alarmSet);
	return setVehicleAlarm_result;
}