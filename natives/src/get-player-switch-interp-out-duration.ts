/**
 * STREAMING:GET_PLAYER_SWITCH_INTERP_OUT_DURATION
 *
 * 0x3F331BE6EB7BAC07

 * 
 * returns the duration of any interpolation out of an establishing shot, in milliseconds, or 0 if invalid
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getPlayerSwitchInterpOutDuration(): number {
	const getPlayerSwitchInterpOutDuration_result = Citizen.invokeNative<number>('0x3F331BE6EB7BAC07', );
	return getPlayerSwitchInterpOutDuration_result;
}