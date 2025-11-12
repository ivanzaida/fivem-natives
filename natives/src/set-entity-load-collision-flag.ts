import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_LOAD_COLLISION_FLAG
 *
 * 0x788F35D395511DFE

 * 
 * Loads collision grid for an entity spawned outside of a player's loaded area. This allows peds to execute tasks rather than sit dormant because of a lack of a physics grid.
 * Certainly not the main usage of this native but when set to true for a Vehicle, it will prevent the vehicle to explode if it is spawned far away from the player.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} loadCollisionFlag
 * @param {boolean} doDeadCheck
 */
export function setEntityLoadCollisionFlag(entity: EntityIndex, loadCollisionFlag: boolean, doDeadCheck: boolean = true): void {
	const setEntityLoadCollisionFlag_result = Citizen.invokeNative<void>('0x788F35D395511DFE', entity, loadCollisionFlag, doDeadCheck);
	return setEntityLoadCollisionFlag_result;
}