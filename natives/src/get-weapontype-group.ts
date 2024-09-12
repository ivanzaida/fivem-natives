import { EWeaponType, EWeaponGroup } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPONTYPE_GROUP
 *
 * 0x6CC7A2E68E8A565A

 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weapon
 * @returns {EWeaponGroup}  
 */
export function getWeapontypeGroup(weapon: EWeaponType | number): EWeaponGroup {
	const getWeapontypeGroup_result = Citizen.invokeNative<EWeaponGroup>('0x6CC7A2E68E8A565A', weapon);
	return getWeapontypeGroup_result;
}