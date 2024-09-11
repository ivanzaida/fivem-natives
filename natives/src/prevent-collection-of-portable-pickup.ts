import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:PREVENT_COLLECTION_OF_PORTABLE_PICKUP
 *
 * 0x26909BE8B0CCD35B

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {boolean} prevent
 * @param {boolean} localOnly
 */
export function preventCollectionOfPortablePickup(pickupID: ObjectIndex, prevent: boolean, localOnly: boolean = false): void {
	const preventCollectionOfPortablePickup_result = Citizen.invokeNative<void>('0x26909BE8B0CCD35B', pickupID, prevent, localOnly);
	return preventCollectionOfPortablePickup_result;
}