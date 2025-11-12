import { PedIndex, EWeaponType, EAmmoType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_PED_ORIGINAL_AMMO_TYPE_FROM_WEAPON
 *
 * 0x1820CC8352D1B6EE

 * 
 * Returns the base/default ammo type of the specified ped's specified weapon.
 * Use GET_PED_AMMO_TYPE_FROM_WEAPON if you want current ammo type (like AMMO_MG_INCENDIARY/AMMO_MG_TRACER while using MkII magazines) and use this if you want base ammo type. (AMMO_MG)
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @returns {EAmmoType}  
 */
export function getPedOriginalAmmoTypeFromWeapon(ped: PedIndex, weaponType: EWeaponType | number): EAmmoType {
	const getPedOriginalAmmoTypeFromWeapon_result = Citizen.invokeNative<EAmmoType>('0x1820CC8352D1B6EE', ped, weaponType);
	return getPedOriginalAmmoTypeFromWeapon_result;
}