/**
 * PATHFIND:REMOVE_NAVMESH_BLOCKING_OBJECT
 *
 * 0x8E99C7AF6C6639AB

 * 
 * This command removes a blocking object which was previously added via "ADD_NAVMESH_BLOCKING_OBJECT"
 * All blocking objects added with the default "bPermanent=FALSE" will be automatically removed when the
 * script which added them teminates - there is no need to manually remove these objects in this case.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} objectId
 */
export function removeNavmeshBlockingObject(objectId: number): void {
	const removeNavmeshBlockingObject_result = Citizen.invokeNative<void>('0x8E99C7AF6C6639AB', objectId);
	return removeNavmeshBlockingObject_result;
}