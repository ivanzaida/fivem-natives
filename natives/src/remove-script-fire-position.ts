/**
 * PLAYER:REMOVE_SCRIPT_FIRE_POSITION
 *
 * 0xE0CE913C020B2907

 * 
 * Resets values set by SET_SCRIPT_FIRE_POSITION
 * 
 * 
 * ------------------------------------------------------------------
 */
export function removeScriptFirePosition(): void {
	const removeScriptFirePosition_result = Citizen.invokeNative<void>('0xE0CE913C020B2907', );
	return removeScriptFirePosition_result;
}