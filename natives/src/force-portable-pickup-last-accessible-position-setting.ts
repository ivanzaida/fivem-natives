import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:FORCE_PORTABLE_PICKUP_LAST_ACCESSIBLE_POSITION_SETTING
 *
 * 0x7AD61992EAE86A99

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 */
export function forcePortablePickupLastAccessiblePositionSetting(pickupID: ObjectIndex): void {
	const forcePortablePickupLastAccessiblePositionSetting_result = Citizen.invokeNative<void>('0x7AD61992EAE86A99', pickupID);
	return forcePortablePickupLastAccessiblePositionSetting_result;
}