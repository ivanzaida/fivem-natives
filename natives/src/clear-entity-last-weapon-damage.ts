import { EntityIndex } from '@ivanzaida/structures'

/**
 * WEAPON:CLEAR_ENTITY_LAST_WEAPON_DAMAGE
 *
 * 0x7468550652312059

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function clearEntityLastWeaponDamage(entity: EntityIndex): void {
	const clearEntityLastWeaponDamage_result = Citizen.invokeNative<void>('0x7468550652312059', entity);
	return clearEntityLastWeaponDamage_result;
}