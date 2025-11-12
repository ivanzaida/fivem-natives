import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:REQUEST_PED_RESTRICTED_VEHICLE_VISIBILITY_TRACKING
 *
 * 0x2437F0D5BB0A2298

 * 
 * Enable better ped's vehicle during visibility tracking
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} trackvehicle
 */
export function requestPedRestrictedVehicleVisibilityTracking(ped: PedIndex, trackvehicle: boolean): void {
	const requestPedRestrictedVehicleVisibilityTracking_result = Citizen.invokeNative<void>('0x2437F0D5BB0A2298', ped, trackvehicle);
	return requestPedRestrictedVehicleVisibilityTracking_result;
}