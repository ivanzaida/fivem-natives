import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_MAX_HEALTH
 *
 * 0xF0259D91B002AE9F

 * 
 * For instance: ENTITY::SET_ENTITY_MAX_HEALTH(PLAYER::PLAYER_PED_ID(), 200); // director_mode.c4: 67849
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} health
 */
export function setEntityMaxHealth(entity: EntityIndex, health: number): void {
	const setEntityMaxHealth_result = Citizen.invokeNative<void>('0xF0259D91B002AE9F', entity, health);
	return setEntityMaxHealth_result;
}