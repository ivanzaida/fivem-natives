import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_PICKUP_ROPE_LENGTH_FOR_CARGOBOB
 *
 * 0x17B5AACACF266B6A

 * 
 * min: 1.9f, max: 100.0f
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {number} detachedRopeLength
 * @param {number} attachedRopeLength
 * @param {boolean} setRopeLengthInstantly
 */
export function setPickupRopeLengthForCargobob(cargobob: VehicleIndex, detachedRopeLength: number, attachedRopeLength: number, setRopeLengthInstantly: boolean = false): void {
	const setPickupRopeLengthForCargobob_result = Citizen.invokeNative<void>('0x17B5AACACF266B6A', cargobob, detachedRopeLength, attachedRopeLength, setRopeLengthInstantly);
	return setPickupRopeLengthForCargobob_result;
}