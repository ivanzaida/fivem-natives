/**
 * TASK:ADD_PATROL_ROUTE_NODE
 *
 * 0x595076DE836264C0

 * This can only be called once OPEN_PATROL_ROUTE has been called.
 * There cane be a maximum of 16 nodes per route.
 * Example:
 * TASK::ADD_PATROL_ROUTE_NODE(2, "WORLD_HUMAN_GUARD_STAND", -193.4915, -2378.864990234375, 10.9719, -193.4915, -2378.864990234375, 10.9719, 3000);
 * p0 is between 0 and 4 in the scripts.
 * p1 is "WORLD_HUMAN_GUARD_STAND" or "StandGuard".
 * p2, p3 and p4 is only one parameter sometimes in the scripts. Most likely a Vector3 hence p2, p3 and p4 are coordinates.
 * Examples:
 * TASK::ADD_PATROL_ROUTE_NODE(1, "WORLD_HUMAN_GUARD_STAND", l_739[7/3/], 0.0, 0.0, 0.0, 0);
 * TASK::ADD_PATROL_ROUTE_NODE(1, "WORLD_HUMAN_GUARD_STAND", l_B0[17/44/]._f3, l_B0[17/44/]._f3, 2000);
 * p5, p6 and p7 are for example set to: 1599.0406494140625, 2713.392578125, 44.4309.
 * p8 is an int, often random set to for example: MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000).
 * 
 * ------------------------------------------------------------------
 * @param {number} nodeId
 * @param {string} nodeType
 * @param {number} nodePositionX
 * @param {number} nodePositionY
 * @param {number} nodePositionZ
 * @param {number} nodeLookAtPosX
 * @param {number} nodeLookAtPosY
 * @param {number} nodeLookAtPosZ
 * @param {number} duration The time the ped will spend at the node.
 */
export function addPatrolRouteNode(nodeId: number, nodeType: string, nodePositionX: number, nodePositionY: number, nodePositionZ: number, nodeLookAtPosX: number, nodeLookAtPosY: number, nodeLookAtPosZ: number, duration: number = 0): void {
	const addPatrolRouteNode_result = Citizen.invokeNative<void>('0x595076DE836264C0', nodeId, nodeType, nodePositionX, nodePositionY, nodePositionZ, nodeLookAtPosX, nodeLookAtPosY, nodeLookAtPosZ, duration);
	return addPatrolRouteNode_result;
}