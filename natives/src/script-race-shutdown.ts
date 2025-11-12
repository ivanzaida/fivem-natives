/**
 * MISC:SCRIPT_RACE_SHUTDOWN
 *
 * 0x33F8639DDBB019B4

 * 
 * Shuts down the helper split time helper for mp script races and cleans up memory
 * 
 * 
 * ------------------------------------------------------------------
 */
export function scriptRaceShutdown(): void {
	const scriptRaceShutdown_result = Citizen.invokeNative<void>('0x33F8639DDBB019B4', );
	return scriptRaceShutdown_result;
}