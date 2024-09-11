import { Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * WATER:TEST_PROBE_AGAINST_WATER
 *
 * 0x1EF8801C2AC1FE34

 * 
 * ------------------------------------------------------------------
 * @param {number} startPosX
 * @param {number} startPosY
 * @param {number} startPosZ
 * @param {number} endPosX
 * @param {number} endPosY
 * @param {number} endPosZ
 * @param {Vector3} intersectionPos [Ref]
 * @returns {boolean}  
 */
export function testProbeAgainstWater(startPosX: number, startPosY: number, startPosZ: number, endPosX: number, endPosY: number, endPosZ: number, intersectionPos: Vector3 /* ptr */): boolean {
	const intersectionPosPtr = new Vector3Ref();
	const testProbeAgainstWater_result = Citizen.invokeNative<boolean>('0x1EF8801C2AC1FE34', startPosX, startPosY, startPosZ, endPosX, endPosY, endPosZ, intersectionPosPtr.dataView);
	intersectionPosPtr.copyToVector(intersectionPos);
	return testProbeAgainstWater_result;
}