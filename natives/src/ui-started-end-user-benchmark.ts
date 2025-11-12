/**
 * MISC:UI_STARTED_END_USER_BENCHMARK
 *
 * 0xB0DAD631C6A2A5EB

 * 
 * Returns true if the current frontend menu is FE_MENU_VERSION_SP_PAUSE
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function uiStartedEndUserBenchmark(): boolean {
	const uiStartedEndUserBenchmark_result = Citizen.invokeNative<boolean>('0xB0DAD631C6A2A5EB', );
	return uiStartedEndUserBenchmark_result;
}