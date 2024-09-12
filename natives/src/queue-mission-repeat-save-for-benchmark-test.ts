/**
 * MISC:QUEUE_MISSION_REPEAT_SAVE_FOR_BENCHMARK_TEST
 *
 * 0x080152C0ECDC471B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function queueMissionRepeatSaveForBenchmarkTest(): boolean {
	const queueMissionRepeatSaveForBenchmarkTest_result = Citizen.invokeNative<boolean>('0x080152C0ECDC471B', );
	return queueMissionRepeatSaveForBenchmarkTest_result;
}