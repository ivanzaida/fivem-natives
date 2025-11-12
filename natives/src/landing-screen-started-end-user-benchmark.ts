/**
 * MISC:LANDING_SCREEN_STARTED_END_USER_BENCHMARK
 *
 * 0x0F3098F5B044D6CE

 * 
 * Returns true if the current frontend menu is FE_MENU_VERSION_LANDING_MENU
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function landingScreenStartedEndUserBenchmark(): boolean {
	const landingScreenStartedEndUserBenchmark_result = Citizen.invokeNative<boolean>('0x0F3098F5B044D6CE', );
	return landingScreenStartedEndUserBenchmark_result;
}