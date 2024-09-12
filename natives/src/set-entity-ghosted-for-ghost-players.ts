import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_ENTITY_GHOSTED_FOR_GHOST_PLAYERS
 *
 * 0x52C980E21BCCC469

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} set
 */
export function setEntityGhostedForGhostPlayers(entity: EntityIndex, set: boolean): void {
	const setEntityGhostedForGhostPlayers_result = Citizen.invokeNative<void>('0x52C980E21BCCC469', entity, set);
	return setEntityGhostedForGhostPlayers_result;
}