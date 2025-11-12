import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_NOWEAPONDECALS
 *
 * 0x33D2D42AC3E42D0B

 * 
 * Setup an entity to not receive weapon decals
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} noWeaponDecals
 */
export function setEntityNoweapondecals(entity: EntityIndex, noWeaponDecals: boolean): void {
	const setEntityNoweapondecals_result = Citizen.invokeNative<void>('0x33D2D42AC3E42D0B', entity, noWeaponDecals);
	return setEntityNoweapondecals_result;
}