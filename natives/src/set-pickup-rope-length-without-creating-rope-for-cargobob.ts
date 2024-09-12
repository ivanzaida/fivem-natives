import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_PICKUP_ROPE_LENGTH_WITHOUT_CREATING_ROPE_FOR_CARGOBOB
 *
 * 0x907862D7EED879DE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {number} detachedRopeLength
 * @param {number} attachedRopeLength
 */
export function setPickupRopeLengthWithoutCreatingRopeForCargobob(cargobob: VehicleIndex, detachedRopeLength: number, attachedRopeLength: number): void {
	const setPickupRopeLengthWithoutCreatingRopeForCargobob_result = Citizen.invokeNative<void>('0x907862D7EED879DE', cargobob, detachedRopeLength, attachedRopeLength);
	return setPickupRopeLengthWithoutCreatingRopeForCargobob_result;
}