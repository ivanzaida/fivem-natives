import { IntRef } from '@ivanzaida/structures'

/**
 * PATHFIND:GET_STREET_NAME_AT_COORD
 *
 * 0x77BCD89051F77C43

 * 
 * The nearest one returns the string in hashName1. The second one only gets returned if it is within 40 meters of the searchCoords. So hashName2 may be empty(0).
 * 
 * Determines the name of the street which is the closest to the given coordinates.
 * 
 * x,y,z - the coordinates of the street
 * streetName - returns a hash to the name of the street the coords are on
 * crossingRoad - if the coordinates are on an intersection, a hash to the name of the crossing road
 * 
 * Note: the names are returned as hashes, the strings can be returned using the function HUD::GET_STREET_NAME_FROM_HASH_KEY.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} searchCoordsX
 * @param {number} searchCoordsY
 * @param {number} searchCoordsZ
 * @param {IntRef} hashName1 [Ref]
 * @param {IntRef} hashName2 [Ref]
 */
export function getStreetNameAtCoord(searchCoordsX: number, searchCoordsY: number, searchCoordsZ: number, hashName1: IntRef /* ptr */, hashName2: IntRef /* ptr */): void {
	const getStreetNameAtCoord_result = Citizen.invokeNative<void>('0x77BCD89051F77C43', searchCoordsX, searchCoordsY, searchCoordsZ, hashName1.dataView, hashName2.dataView);
	return getStreetNameAtCoord_result;
}