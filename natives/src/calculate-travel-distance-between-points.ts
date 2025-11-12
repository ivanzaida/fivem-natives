/**
 * PATHFIND:CALCULATE_TRAVEL_DISTANCE_BETWEEN_POINTS
 *
 * 0x1287CC087A5CE000

 * 
 * Calculates the travel distance between a set of points.
 * 
 * Doesn't seem to correlate with distance on gps sometimes.
 * This function returns the value 100000.0 over long distances, seems to be a failure mode result, potentially occurring when not all path nodes are loaded into pathfind.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} node1PosX
 * @param {number} node1PosY
 * @param {number} node1PosZ
 * @param {number} node2PosX
 * @param {number} node2PosY
 * @param {number} node2PosZ
 * @returns {number}  
 */
export function calculateTravelDistanceBetweenPoints(node1PosX: number, node1PosY: number, node1PosZ: number, node2PosX: number, node2PosY: number, node2PosZ: number): number {
	const calculateTravelDistanceBetweenPoints_result = Citizen.invokeNative<number>('0x1287CC087A5CE000', node1PosX, node1PosY, node1PosZ, node2PosX, node2PosY, node2PosZ);
	return calculateTravelDistanceBetweenPoints_result;
}