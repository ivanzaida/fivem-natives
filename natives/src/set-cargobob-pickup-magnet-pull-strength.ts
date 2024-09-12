import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_PICKUP_MAGNET_PULL_STRENGTH
 *
 * 0x99B282132C4AB6DA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {number} magnetPullStrength
 */
export function setCargobobPickupMagnetPullStrength(cargobob: VehicleIndex, magnetPullStrength: number): void {
	const setCargobobPickupMagnetPullStrength_result = Citizen.invokeNative<void>('0x99B282132C4AB6DA', cargobob, magnetPullStrength);
	return setCargobobPickupMagnetPullStrength_result;
}