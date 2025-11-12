import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_PICKUP_MAGNET_ACTIVE
 *
 * 0x279E935A91EF72DA

 * 
 * Won't attract or magnetize to any helicopters or planes of course, but that's common sense.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {boolean} active
 */
export function setCargobobPickupMagnetActive(cargobob: VehicleIndex, active: boolean): void {
	const setCargobobPickupMagnetActive_result = Citizen.invokeNative<void>('0x279E935A91EF72DA', cargobob, active);
	return setCargobobPickupMagnetActive_result;
}