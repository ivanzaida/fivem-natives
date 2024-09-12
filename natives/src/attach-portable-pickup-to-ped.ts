import { ObjectIndex, PedIndex } from '@ivanzaida/structures'

/**
 * OBJECT:ATTACH_PORTABLE_PICKUP_TO_PED
 *
 * 0xCD1BFD3115E1591A

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {PedIndex} pedID
 */
export function attachPortablePickupToPed(pickupID: ObjectIndex, pedID: PedIndex): void {
	const attachPortablePickupToPed_result = Citizen.invokeNative<void>('0xCD1BFD3115E1591A', pickupID, pedID);
	return attachPortablePickupToPed_result;
}