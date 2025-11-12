import { Vector3, EScriptWaterTestResult } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * WATER:TEST_PROBE_AGAINST_ALL_WATER
 *
 * 0xDB947915FA4FB5D5

 * 
 * enum eScriptWaterTestResult
 * {
 * 	SCRIPT_WATER_TEST_RESULT_NONE,
 * 	SCRIPT_WATER_TEST_RESULT_WATER,
 * 	SCRIPT_WATER_TEST_RESULT_BLOCKED,
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} startPosX
 * @param {number} startPosY
 * @param {number} startPosZ
 * @param {number} endPosX
 * @param {number} endPosY
 * @param {number} endPosZ
 * @param {number} blockingFlags
 * @param {Vector3} intersectionPos [Ref]
 * @returns {EScriptWaterTestResult}  
 */
export function testProbeAgainstAllWater(startPosX: number, startPosY: number, startPosZ: number, endPosX: number, endPosY: number, endPosZ: number, blockingFlags: number, intersectionPos: Vector3 /* ptr */): EScriptWaterTestResult {
	const intersectionPosPtr = new Vector3Ref();
	const testProbeAgainstAllWater_result = Citizen.invokeNative<EScriptWaterTestResult>('0xDB947915FA4FB5D5', startPosX, startPosY, startPosZ, endPosX, endPosY, endPosZ, blockingFlags, intersectionPosPtr.dataView);
	intersectionPosPtr.copyToVector(intersectionPos);
	return testProbeAgainstAllWater_result;
}