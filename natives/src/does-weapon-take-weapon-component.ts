import { EWeaponType, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:DOES_WEAPON_TAKE_WEAPON_COMPONENT
 *
 * 0x0C985A2C6C77023D

 * 
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @param {EWeaponcomponentType} weaponComponent
 * @returns {boolean}  
 */
export function doesWeaponTakeWeaponComponent(weaponType: EWeaponType | number, weaponComponent: EWeaponcomponentType | number): boolean {
	const doesWeaponTakeWeaponComponent_result = Citizen.invokeNative<boolean>('0x0C985A2C6C77023D', weaponType, weaponComponent);
	return doesWeaponTakeWeaponComponent_result;
}