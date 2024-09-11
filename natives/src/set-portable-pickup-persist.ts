import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PORTABLE_PICKUP_PERSIST
 *
 * 0x5612E9BDDC2940D7

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {boolean} set
 */
export function setPortablePickupPersist(pickupID: ObjectIndex, set: boolean): void {
	const setPortablePickupPersist_result = Citizen.invokeNative<void>('0x5612E9BDDC2940D7', pickupID, set);
	return setPortablePickupPersist_result;
}