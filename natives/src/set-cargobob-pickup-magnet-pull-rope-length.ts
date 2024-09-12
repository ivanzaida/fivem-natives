import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_PICKUP_MAGNET_PULL_ROPE_LENGTH
 *
 * 0x529A57C2E61B1345

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {number} magnetPullRopeLength
 */
export function setCargobobPickupMagnetPullRopeLength(cargobob: VehicleIndex, magnetPullRopeLength: number): void {
	const setCargobobPickupMagnetPullRopeLength_result = Citizen.invokeNative<void>('0x529A57C2E61B1345', cargobob, magnetPullRopeLength);
	return setCargobobPickupMagnetPullRopeLength_result;
}