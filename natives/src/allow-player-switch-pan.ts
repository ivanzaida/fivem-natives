/**
 * STREAMING:ALLOW_PLAYER_SWITCH_PAN
 *
 * 0x546ACDD38D665C85

 * 
 * Script can request a player switch which pauses before the pan, for example if waiting for script requested assets
 * to load etc. This command signals to the player switch system that it is clear to proceed with the pan
 * allows currently active switch to perform pan (if it was waiting)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function allowPlayerSwitchPan(): void {
	const allowPlayerSwitchPan_result = Citizen.invokeNative<void>('0x546ACDD38D665C85', );
	return allowPlayerSwitchPan_result;
}