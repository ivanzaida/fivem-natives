import { ESpawnpointsFlags } from '@ivanzaida/structures'

/**
 * PED:SPAWNPOINTS_START_SEARCH_IN_ANGLED_AREA
 *
 * 0xC9666089A105E4BD

 * 
 * Same as SPAWNPOINTS_START_SEARCH, except uses the angled area volume definition popular with level-design
 * vPoint1 & vPoint2 define the start and end points of a rectangle, fWidth in size
 * Height of the area is defined by raising one point above the other (a little height we be artificially applied in the case of a flat volume)
 * If optional 'iMaxSearchDurationMS' param is non-zero, search will enter a 'failed' state if this milliseconds duration is exceeded
 * - if the timeout value is specified, script must check for the failure case via SPAWNPOINTS_IS_SEARCH_FAILED()
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} point1X
 * @param {number} point1Y
 * @param {number} point1Z
 * @param {number} point2X
 * @param {number} point2Y
 * @param {number} point2Z
 * @param {number} width
 * @param {ESpawnpointsFlags} flags
 * @param {number} minimumSpacing
 * @param {number} maxSearchDurationMS
 */
export function spawnpointsStartSearchInAngledArea(point1X: number, point1Y: number, point1Z: number, point2X: number, point2Y: number, point2Z: number, width: number, flags: ESpawnpointsFlags | number = 0, minimumSpacing: number = 0, maxSearchDurationMS: number = 0): void {
	const spawnpointsStartSearchInAngledArea_result = Citizen.invokeNative<void>('0xC9666089A105E4BD', point1X, point1Y, point1Z, point2X, point2Y, point2Z, width, flags, minimumSpacing, maxSearchDurationMS);
	return spawnpointsStartSearchInAngledArea_result;
}