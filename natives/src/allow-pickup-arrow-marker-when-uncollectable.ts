import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:ALLOW_PICKUP_ARROW_MARKER_WHEN_UNCOLLECTABLE
 *
 * 0x965118645D618F6E

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {boolean} set
 */
export function allowPickupArrowMarkerWhenUncollectable(pickupID: ObjectIndex, set: boolean = true): void {
	const allowPickupArrowMarkerWhenUncollectable_result = Citizen.invokeNative<void>('0x965118645D618F6E', pickupID, set);
	return allowPickupArrowMarkerWhenUncollectable_result;
}