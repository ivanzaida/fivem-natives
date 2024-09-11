import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:CLEAR_ENTITY_LAST_DAMAGE_ENTITY
 *
 * 0xE4DC7B3DD712372B

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function clearEntityLastDamageEntity(entity: EntityIndex): void {
	const clearEntityLastDamageEntity_result = Citizen.invokeNative<void>('0xE4DC7B3DD712372B', entity);
	return clearEntityLastDamageEntity_result;
}