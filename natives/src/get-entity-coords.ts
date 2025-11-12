import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_COORDS
 *
 * 0xD1A6A821F5AC81DB

 * 
 * Gets the co-ordinates of the entity. If a ped, this is at the root bone, and if the ped is
 * in a vehicle then it is the coordinates of the vehicle which are returned.
 * 
 * Gets the current coordinates for a specified entity.
 * `entity` = The entity to get the coordinates from.
 * `alive` = Unused by the game, potentially used by debug builds of GTA in order to assert whether or not an entity was alive.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} doDeadCheck If false then the command will not assert if the entity has not been checked for being dead
 * @returns {Vector3}  
 */
export function getEntityCoords(entity: EntityIndex, doDeadCheck: boolean = true): Vector3 {
	const getEntityCoords_result = Citizen.invokeNative<Vector3>('0xD1A6A821F5AC81DB', entity, doDeadCheck);
	return getEntityCoords_result;
}