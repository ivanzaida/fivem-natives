import { EWeaponType, PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_CUSTOM_PICKUP_WEAPON_HASH
 *
 * 0xCFA4C40D5C68471B

 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @param {PickupIndex} pickupPlacement
 */
export function setCustomPickupWeaponHash(weaponType: EWeaponType | number, pickupPlacement: PickupIndex): void {
	const setCustomPickupWeaponHash_result = Citizen.invokeNative<void>('0xCFA4C40D5C68471B', weaponType, pickupPlacement);
	return setCustomPickupWeaponHash_result;
}