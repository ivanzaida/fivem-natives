/**
 * PATHFIND:DOES_NAVMESH_BLOCKING_OBJECT_EXIST
 *
 * 0xF935563454D3B338

 * 
 * Queries whether a navmesh blocking object with the specfied index exists
 * This may be useful during mission shutdown, or S/F skips, where the mission-cleanup code automatically
 * removes all the objects which the script adds - but where the script itself may try to manually remove them.
 * Wrapping REMOVE_NAVMESH_BLOCKING_OBJECT with a call to DOES_NAVMESH_BLOCKING_OBJECT_EXIST, will ensure
 * there are no warnings about the script trying to remove an object which doesn't exist.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} objectId
 * @returns {boolean}  
 */
export function doesNavmeshBlockingObjectExist(objectId: number): boolean {
	const doesNavmeshBlockingObjectExist_result = Citizen.invokeNative<boolean>('0xF935563454D3B338', objectId);
	return doesNavmeshBlockingObjectExist_result;
}