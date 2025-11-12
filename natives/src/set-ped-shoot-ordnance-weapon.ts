import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_SHOOT_ORDNANCE_WEAPON
 *
 * 0x095BB431592C5642

 * 
 * Returns handle of the projectile.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} projectileLifeTime
 * @returns {EntityIndex}  
 */
export function setPedShootOrdnanceWeapon(ped: PedIndex, projectileLifeTime: number = 1): EntityIndex {
	const setPedShootOrdnanceWeapon_result = Citizen.invokeNative<EntityIndex>('0x095BB431592C5642', ped, projectileLifeTime);
	return setPedShootOrdnanceWeapon_result;
}