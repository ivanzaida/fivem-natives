import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_SIREN_BYPASS_MP_DRIVER_CHECK
 *
 * 0x88B7E0BE68436D8B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} bypass
 */
export function setSirenBypassMpDriverCheck(vehicle: VehicleIndex, bypass: boolean): void {
	const setSirenBypassMpDriverCheck_result = Citizen.invokeNative<void>('0x88B7E0BE68436D8B', vehicle, bypass);
	return setSirenBypassMpDriverCheck_result;
}