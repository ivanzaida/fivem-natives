import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_AUTOMATIC_CRASH_TASK
 *
 * 0x3423BC61BC6BD401

 * 
 * Sets a flag on heli and another vehicle type.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} disable
 */
export function setDisableAutomaticCrashTask(vehicle: VehicleIndex, disable: boolean): void {
	const setDisableAutomaticCrashTask_result = Citizen.invokeNative<void>('0x3423BC61BC6BD401', vehicle, disable);
	return setDisableAutomaticCrashTask_result;
}