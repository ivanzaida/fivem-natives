import { PedIndex, EWeaponType, EAmmoType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_PED_AMMO_TYPE_FROM_WEAPON
 *
 * 0xA239630C4686BC6E

 * 
 * Returns the current ammo type of the specified ped's specified weapon.
 * MkII magazines will change the return value, like Pistol MkII returning AMMO_PISTOL without any components and returning AMMO_PISTOL_TRACER after Tracer Rounds component is attached.
 * Use 0xF489B44DD5AF4BD9 if you always want AMMO_PISTOL.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @returns {EAmmoType}  
 */
export function getPedAmmoTypeFromWeapon(ped: PedIndex, weaponType: EWeaponType | number): EAmmoType {
	const getPedAmmoTypeFromWeapon_result = Citizen.invokeNative<EAmmoType>('0xA239630C4686BC6E', ped, weaponType);
	return getPedAmmoTypeFromWeapon_result;
}