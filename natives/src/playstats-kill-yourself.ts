/**
 * STATS:PLAYSTATS_KILL_YOURSELF
 *
 * 0x9CE7919ACC98C899

 * 
 * ------------------------------------------------------------------
 */
export function playstatsKillYourself(): void {
	const playstatsKillYourself_result = Citizen.invokeNative<void>('0x9CE7919ACC98C899', );
	return playstatsKillYourself_result;
}