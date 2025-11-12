/**
 * STREAMING:STOP_PLAYER_SWITCH
 *
 * 0xF4DB2666A609235A

 * 
 * abandons currently running player switch
 * 
 * 
 * ------------------------------------------------------------------
 */
export function stopPlayerSwitch(): void {
	const stopPlayerSwitch_result = Citizen.invokeNative<void>('0xF4DB2666A609235A', );
	return stopPlayerSwitch_result;
}