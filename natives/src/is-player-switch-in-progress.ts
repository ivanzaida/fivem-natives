/**
 * STREAMING:IS_PLAYER_SWITCH_IN_PROGRESS
 *
 * 0x3555462DB47B7AB1

 * 
 * Returns true if the player is currently switching, false otherwise.
 * (When the camera is in the sky moving from Trevor to Franklin for example)
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isPlayerSwitchInProgress(): boolean {
	const isPlayerSwitchInProgress_result = Citizen.invokeNative<boolean>('0x3555462DB47B7AB1', );
	return isPlayerSwitchInProgress_result;
}