import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_IMPATIENCE_TIMER
 *
 * 0x740CB8455C25DD1C

 * 
 * Seems to copy some values in vehicle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} handlingOverrideMs
 */
export function setVehicleImpatienceTimer(vehicle: VehicleIndex, handlingOverrideMs: number): void {
	const setVehicleImpatienceTimer_result = Citizen.invokeNative<void>('0x740CB8455C25DD1C', vehicle, handlingOverrideMs);
	return setVehicleImpatienceTimer_result;
}