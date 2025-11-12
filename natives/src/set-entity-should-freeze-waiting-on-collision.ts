import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_SHOULD_FREEZE_WAITING_ON_COLLISION
 *
 * 0x11C125313CB8ADA2

 * 
 * True means it can be deleted by the engine when switching lobbies/missions/etc, false means the script is expected to clean it up.
 * 
 * "Allow Freeze If No Collision"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} shouldFreeze
 */
export function setEntityShouldFreezeWaitingOnCollision(entity: EntityIndex, shouldFreeze: boolean): void {
	const setEntityShouldFreezeWaitingOnCollision_result = Citizen.invokeNative<void>('0x11C125313CB8ADA2', entity, shouldFreeze);
	return setEntityShouldFreezeWaitingOnCollision_result;
}