import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:REQUEST_PED_VEHICLE_VISIBILITY_TRACKING
 *
 * 0x7AA365BA6A18440B

 * 
 * Enable better ped's vehicle during visibility tracking
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} trackvehicle
 */
export function requestPedVehicleVisibilityTracking(ped: PedIndex, trackvehicle: boolean): void {
	const requestPedVehicleVisibilityTracking_result = Citizen.invokeNative<void>('0x7AA365BA6A18440B', ped, trackvehicle);
	return requestPedVehicleVisibilityTracking_result;
}