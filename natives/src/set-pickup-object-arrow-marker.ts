import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PICKUP_OBJECT_ARROW_MARKER
 *
 * 0x5730F7F898FC023D

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {boolean} set
 */
export function setPickupObjectArrowMarker(pickupID: ObjectIndex, set: boolean = true): void {
	const setPickupObjectArrowMarker_result = Citizen.invokeNative<void>('0x5730F7F898FC023D', pickupID, set);
	return setPickupObjectArrowMarker_result;
}