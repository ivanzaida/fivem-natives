import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_ENTITY_FROM_OBJECT_ID
 *
 * 0x85266061BAF25926

 * Returns the network object ID (the code id) of a entity.
 * I've had this return the player's ped handle sometimes, but also other random entities.
 * Whatever p0 is, it's at least not synced to other players.
 * At least not all the time, some p0 values actually output the same entity, (different handle of course, but same entity).
 * But another p0 value may return an entity for player x, but not for player y (it'll just return -1 even if the entity exists on both clients).
 * Returns an entity handle or -1, value changes based on p0's value.
 * 
 * ------------------------------------------------------------------
 * @param {number} object
 * @returns {EntityIndex}  
 */
export function networkGetEntityFromObjectId(object: number): EntityIndex {
	const networkGetEntityFromObjectId_result = Citizen.invokeNative<EntityIndex>('0x85266061BAF25926', object);
	return networkGetEntityFromObjectId_result;
}