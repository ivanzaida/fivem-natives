import { Vector3, IntRef, FloatRef } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_CLOSEST_ROAD
 *
 * 0x748728E3BFD8E371

 * 
 * p1 seems to be always 1.0f in the scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} testCoorsX
 * @param {number} testCoorsY
 * @param {number} testCoorsZ
 * @param {number} minLength
 * @param {number} minLanes
 * @param {Vector3} southEndNode [Ref]
 * @param {Vector3} northEndNode [Ref]
 * @param {IntRef} lanesGoingSouth [Ref]
 * @param {IntRef} lanesGoingNorth [Ref]
 * @param {FloatRef} centralReservationWidth [Ref]
 * @param {boolean} ignoreSwitchedOffNodes
 * @returns {boolean}  
 */
export function getClosestRoad(testCoorsX: number, testCoorsY: number, testCoorsZ: number, minLength: number, minLanes: number, southEndNode: Vector3 /* ptr */, northEndNode: Vector3 /* ptr */, lanesGoingSouth: IntRef /* ptr */, lanesGoingNorth: IntRef /* ptr */, centralReservationWidth: FloatRef /* ptr */, ignoreSwitchedOffNodes: boolean = true): boolean {
	const southEndNodePtr = new Vector3Ref();
	const northEndNodePtr = new Vector3Ref();
	const getClosestRoad_result = Citizen.invokeNative<boolean>('0x748728E3BFD8E371', testCoorsX, testCoorsY, testCoorsZ, minLength, minLanes, southEndNodePtr.dataView, northEndNodePtr.dataView, lanesGoingSouth.dataView, lanesGoingNorth.dataView, centralReservationWidth.dataView, ignoreSwitchedOffNodes);
	southEndNodePtr.copyToVector(southEndNode);
	northEndNodePtr.copyToVector(northEndNode);
	return getClosestRoad_result;
}