import { FloatRef, EScriptWaterTestResult } from '@ivanzaida/structures'

/**
 * WATER:TEST_VERTICAL_PROBE_AGAINST_ALL_WATER
 *
 * 0x53875E6971DE2FBF

 * 
 * See TEST_PROBE_AGAINST_ALL_WATER.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} startPosX
 * @param {number} startPosY
 * @param {number} startPosZ
 * @param {number} blockingFlags
 * @param {FloatRef} height [Ref]
 * @returns {EScriptWaterTestResult}  
 */
export function testVerticalProbeAgainstAllWater(startPosX: number, startPosY: number, startPosZ: number, blockingFlags: number, height: FloatRef /* ptr */): EScriptWaterTestResult {
	const testVerticalProbeAgainstAllWater_result = Citizen.invokeNative<EScriptWaterTestResult>('0x53875E6971DE2FBF', startPosX, startPosY, startPosZ, blockingFlags, height.dataView);
	return testVerticalProbeAgainstAllWater_result;
}