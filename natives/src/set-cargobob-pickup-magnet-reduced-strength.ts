import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_PICKUP_MAGNET_REDUCED_STRENGTH
 *
 * 0xAF22CCA1763E6B1F

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {number} magnetStrength
 */
export function setCargobobPickupMagnetReducedStrength(cargobob: VehicleIndex, magnetStrength: number): void {
	const setCargobobPickupMagnetReducedStrength_result = Citizen.invokeNative<void>('0xAF22CCA1763E6B1F', cargobob, magnetStrength);
	return setCargobobPickupMagnetReducedStrength_result;
}