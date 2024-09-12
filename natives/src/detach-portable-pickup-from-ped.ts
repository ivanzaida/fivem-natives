import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:DETACH_PORTABLE_PICKUP_FROM_PED
 *
 * 0x31A69AB30F92CBD0

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 */
export function detachPortablePickupFromPed(pickupID: ObjectIndex): void {
	const detachPortablePickupFromPed_result = Citizen.invokeNative<void>('0x31A69AB30F92CBD0', pickupID);
	return detachPortablePickupFromPed_result;
}