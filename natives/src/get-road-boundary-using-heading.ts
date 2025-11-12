import { Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_ROAD_BOUNDARY_USING_HEADING
 *
 * 0x5053D36357207FD6

 * 
 * Retuns the point on the road edge from the nearest node to vInputNodePosition in the direction most orientated with fHeading
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} inputNodePositionX
 * @param {number} inputNodePositionY
 * @param {number} inputNodePositionZ
 * @param {number} heading
 * @param {Vector3} outPositionByRoad [Ref]
 * @returns {boolean}  
 */
export function getRoadBoundaryUsingHeading(inputNodePositionX: number, inputNodePositionY: number, inputNodePositionZ: number, heading: number, outPositionByRoad: Vector3 /* ptr */): boolean {
	const outPositionByRoadPtr = new Vector3Ref();
	const getRoadBoundaryUsingHeading_result = Citizen.invokeNative<boolean>('0x5053D36357207FD6', inputNodePositionX, inputNodePositionY, inputNodePositionZ, heading, outPositionByRoadPtr.dataView);
	outPositionByRoadPtr.copyToVector(outPositionByRoad);
	return getRoadBoundaryUsingHeading_result;
}