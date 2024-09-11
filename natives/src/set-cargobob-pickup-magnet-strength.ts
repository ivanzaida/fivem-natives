import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_PICKUP_MAGNET_STRENGTH
 *
 * 0x8E7F0FC0E58A6331

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {number} magnetStrength
 */
export function setCargobobPickupMagnetStrength(cargobob: VehicleIndex, magnetStrength: number): void {
	const setCargobobPickupMagnetStrength_result = Citizen.invokeNative<void>('0x8E7F0FC0E58A6331', cargobob, magnetStrength);
	return setCargobobPickupMagnetStrength_result;
}