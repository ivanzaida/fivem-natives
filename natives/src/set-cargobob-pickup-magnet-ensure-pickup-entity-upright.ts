import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_PICKUP_MAGNET_ENSURE_PICKUP_ENTITY_UPRIGHT
 *
 * 0x220D7AA717CC835C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {boolean} ensureEntityUpright
 */
export function setCargobobPickupMagnetEnsurePickupEntityUpright(cargobob: VehicleIndex, ensureEntityUpright: boolean): void {
	const setCargobobPickupMagnetEnsurePickupEntityUpright_result = Citizen.invokeNative<void>('0x220D7AA717CC835C', cargobob, ensureEntityUpright);
	return setCargobobPickupMagnetEnsurePickupEntityUpright_result;
}