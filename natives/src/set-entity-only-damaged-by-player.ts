import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_ONLY_DAMAGED_BY_PLAYER
 *
 * 0x1F7539C841C2A71F

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} onlyDamagedByPlayer
 */
export function setEntityOnlyDamagedByPlayer(entity: EntityIndex, onlyDamagedByPlayer: boolean): void {
	const setEntityOnlyDamagedByPlayer_result = Citizen.invokeNative<void>('0x1F7539C841C2A71F', entity, onlyDamagedByPlayer);
	return setEntityOnlyDamagedByPlayer_result;
}