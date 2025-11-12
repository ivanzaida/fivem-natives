import { Vector3, IntRef } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_RANDOM_VEHICLE_NODE
 *
 * 0x0771D4899F0EDF3E

 * 
 * . Every time this command is called 64 nodes are batched (so you won't get the same node twice in the first 64 calls)
 * Once the node has been returned and perhaps sent to a client the coordinates to spawn a car can be found using GET_SPAWN_COORDINATES_FOR_CAR_NODE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centrePointX
 * @param {number} centrePointY
 * @param {number} centrePointZ
 * @param {number} radius
 * @param {number} minLanes
 * @param {boolean} avoidDeadEnds
 * @param {boolean} avoidHighways
 * @param {Vector3} vecReturn [Ref]
 * @param {IntRef} nodeAddress [Ref]
 * @returns {boolean}  
 */
export function getRandomVehicleNode(centrePointX: number, centrePointY: number, centrePointZ: number, radius: number, minLanes: number, avoidDeadEnds: boolean, avoidHighways: boolean, vecReturn: Vector3 /* ptr */, nodeAddress: IntRef /* ptr */): boolean {
	const vecReturnPtr = new Vector3Ref();
	const getRandomVehicleNode_result = Citizen.invokeNative<boolean>('0x0771D4899F0EDF3E', centrePointX, centrePointY, centrePointZ, radius, minLanes, avoidDeadEnds, avoidHighways, vecReturnPtr.dataView, nodeAddress.dataView);
	vecReturnPtr.copyToVector(vecReturn);
	return getRandomVehicleNode_result;
}