import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:IS_PICKUP_WEAPON_OBJECT_VALID
 *
 * 0x6B0D585D62AACB6F

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @returns {boolean}  
 */
export function isPickupWeaponObjectValid(pickupID: ObjectIndex): boolean {
	const isPickupWeaponObjectValid_result = Citizen.invokeNative<boolean>('0x6B0D585D62AACB6F', pickupID);
	return isPickupWeaponObjectValid_result;
}