import { EWeaponcomponentType, HudStatValues } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_COMPONENT_HUD_STATS
 *
 * 0xF4CFBABEEF287C00

 * 
 * ------------------------------------------------------------------
 * @param {EWeaponcomponentType} weaponComponentType
 * @param {HudStatValues} outValues [Ref]
 * @returns {boolean}  
 */
export function getWeaponComponentHudStats(weaponComponentType: EWeaponcomponentType | number, outValues: HudStatValues /* ptr */): boolean {
	const getWeaponComponentHudStats_result = Citizen.invokeNative<boolean>('0xF4CFBABEEF287C00', weaponComponentType, outValues.dataView);
	return getWeaponComponentHudStats_result;
}