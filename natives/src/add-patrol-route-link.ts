/**
 * TASK:ADD_PATROL_ROUTE_LINK
 *
 * 0x62DDD8B4533C8E19

 * 
 * A Node can have a maximum of 4 links. The direction of the link is the order passed in. e.g NodeA, NodeB passed in that order will will go to from A to B
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nodeId1
 * @param {number} nodeId2
 */
export function addPatrolRouteLink(nodeId1: number, nodeId2: number): void {
	const addPatrolRouteLink_result = Citizen.invokeNative<void>('0x62DDD8B4533C8E19', nodeId1, nodeId2);
	return addPatrolRouteLink_result;
}