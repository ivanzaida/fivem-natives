import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_PICKUP_MAGNET_FALLOFF
 *
 * 0x24FDC1440EEAE053

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {number} magnetFalloff
 */
export function setCargobobPickupMagnetFalloff(cargobob: VehicleIndex, magnetFalloff: number): void {
	const setCargobobPickupMagnetFalloff_result = Citizen.invokeNative<void>('0x24FDC1440EEAE053', cargobob, magnetFalloff);
	return setCargobobPickupMagnetFalloff_result;
}