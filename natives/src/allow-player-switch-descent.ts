/**
 * STREAMING:ALLOW_PLAYER_SWITCH_DESCENT
 *
 * 0x43FFAC3C360D589D

 * 
 * Script can request a player switch which pauses before the descent, for example if waiting for streaming
 * to finish etc. This command signals to the player switch system that it is clear to proceed with the ascent
 * allows currently active switch to perform descent (once loaded)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function allowPlayerSwitchDescent(): void {
	const allowPlayerSwitchDescent_result = Citizen.invokeNative<void>('0x43FFAC3C360D589D', );
	return allowPlayerSwitchDescent_result;
}