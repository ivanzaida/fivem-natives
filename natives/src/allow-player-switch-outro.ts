/**
 * STREAMING:ALLOW_PLAYER_SWITCH_OUTRO
 *
 * 0x50821CA6BB13D3E4

 * 
 * Script can request a player switch which pauses before the outro, for example if waiting for script requested assets
 * to load etc. This command signals to the player switch system that it is clear to proceed with the outro
 * allows currently active switch to perform outro (if it was waiting)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function allowPlayerSwitchOutro(): void {
	const allowPlayerSwitchOutro_result = Citizen.invokeNative<void>('0x50821CA6BB13D3E4', );
	return allowPlayerSwitchOutro_result;
}