import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:ENABLE_STALL_WARNING_SOUNDS
 *
 * 0xEC62EF361B6CB976

 * 
 * Works for planes only.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enable
 */
export function enableStallWarningSounds(vehicle: VehicleIndex, enable: boolean): void {
	const enableStallWarningSounds_result = Citizen.invokeNative<void>('0xEC62EF361B6CB976', vehicle, enable);
	return enableStallWarningSounds_result;
}