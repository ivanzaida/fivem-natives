/**
 * STREAMING:ALLOW_PLAYER_SWITCH_ASCENT
 *
 * 0xBB3CF86DAAC9BAEB

 * 
 * Script can request a player switch which pauses before the ascent, for example if waiting for script camera
 * to finish etc. This command signals to the player switch system that it is clear to proceed with the ascent
 * allows currently active switch to perform ascent (once loaded)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function allowPlayerSwitchAscent(): void {
	const allowPlayerSwitchAscent_result = Citizen.invokeNative<void>('0xBB3CF86DAAC9BAEB', );
	return allowPlayerSwitchAscent_result;
}