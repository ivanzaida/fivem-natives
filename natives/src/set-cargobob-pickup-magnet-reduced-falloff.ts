import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_PICKUP_MAGNET_REDUCED_FALLOFF
 *
 * 0xEBF4A581695418A5

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {number} magnetFalloff
 */
export function setCargobobPickupMagnetReducedFalloff(cargobob: VehicleIndex, magnetFalloff: number): void {
	const setCargobobPickupMagnetReducedFalloff_result = Citizen.invokeNative<void>('0xEBF4A581695418A5', cargobob, magnetFalloff);
	return setCargobobPickupMagnetReducedFalloff_result;
}