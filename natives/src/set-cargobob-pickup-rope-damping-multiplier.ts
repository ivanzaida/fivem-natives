import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_PICKUP_ROPE_DAMPING_MULTIPLIER
 *
 * 0x88A79760AFFC278F

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {number} dampingMult
 */
export function setCargobobPickupRopeDampingMultiplier(cargobob: VehicleIndex, dampingMult: number): void {
	const setCargobobPickupRopeDampingMultiplier_result = Citizen.invokeNative<void>('0x88A79760AFFC278F', cargobob, dampingMult);
	return setCargobobPickupRopeDampingMultiplier_result;
}