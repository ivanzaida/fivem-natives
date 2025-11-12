import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:REMOVE_PICK_UP_ROPE_FOR_CARGOBOB
 *
 * 0x22697BCF9D7EB9FF

 * 
 * Retracts the hook on the cargobob.
 * 
 * Note: after you retract it the natives for dropping the hook no longer work
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 */
export function removePickUpRopeForCargobob(cargobob: VehicleIndex): void {
	const removePickUpRopeForCargobob_result = Citizen.invokeNative<void>('0x22697BCF9D7EB9FF', cargobob);
	return removePickUpRopeForCargobob_result;
}