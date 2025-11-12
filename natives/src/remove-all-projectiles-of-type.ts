import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:REMOVE_ALL_PROJECTILES_OF_TYPE
 *
 * 0x650290A3A38E907E

 * 
 * If `explode` true, then removal is done through exploding the projectile. Basically the same as EXPLODE_PROJECTILES but without defining the owner ped.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @param {boolean} explode Pass in TRUE if you want all projectiles of type WeaponType to detonate
 */
export function removeAllProjectilesOfType(weaponType: EWeaponType | number, explode: boolean = false): void {
	const removeAllProjectilesOfType_result = Citizen.invokeNative<void>('0x650290A3A38E907E', weaponType, explode);
	return removeAllProjectilesOfType_result;
}