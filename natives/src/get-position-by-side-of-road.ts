import { Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_POSITION_BY_SIDE_OF_ROAD
 *
 * 0x2DFF53C2897C7990

 * 
 * ------------------------------------------------------------------
 * @param {number} inputNodePositionX
 * @param {number} inputNodePositionY
 * @param {number} inputNodePositionZ
 * @param {number} direction
 * @param {Vector3} outPositionByRoad [Ref]
 * @returns {boolean}  
 */
export function getPositionBySideOfRoad(inputNodePositionX: number, inputNodePositionY: number, inputNodePositionZ: number, direction: number, outPositionByRoad: Vector3 /* ptr */): boolean {
	const outPositionByRoadPtr = new Vector3Ref();
	const getPositionBySideOfRoad_result = Citizen.invokeNative<boolean>('0x2DFF53C2897C7990', inputNodePositionX, inputNodePositionY, inputNodePositionZ, direction, outPositionByRoadPtr.dataView);
	outPositionByRoadPtr.copyToVector(outPositionByRoad);
	return getPositionBySideOfRoad_result;
}