import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_ALARM
 *
 * 0x24877D84

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} state
 */
export function setVehicleAlarm(vehicle: VehicleIndex, state: boolean): void {
	const setVehicleAlarm_result = Citizen.invokeNative<void>('0x24877D84', vehicle, state);
	return setVehicleAlarm_result;
}