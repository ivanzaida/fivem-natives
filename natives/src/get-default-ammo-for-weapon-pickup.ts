import { EPickupType } from '@ivanzaida/structures'

/**
 * OBJECT:GET_DEFAULT_AMMO_FOR_WEAPON_PICKUP
 *
 * 0x0D44CA9207ABD071

 * 
 * ------------------------------------------------------------------
 * @param {EPickupType} weaponPickupType
 * @returns {number}  
 */
export function getDefaultAmmoForWeaponPickup(weaponPickupType: EPickupType | number): number {
	const getDefaultAmmoForWeaponPickup_result = Citizen.invokeNative<number>('0x0D44CA9207ABD071', weaponPickupType);
	return getDefaultAmmoForWeaponPickup_result;
}