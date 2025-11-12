/**
 * STREAMING:GET_PLAYER_SWITCH_INTERP_OUT_CURRENT_TIME
 *
 * 0xED93D3690FF8AF5F

 * 
 * returns the current interpolation time out of an establishing shot, in milliseconds. -1 will be returned if interpolation is not in progress
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getPlayerSwitchInterpOutCurrentTime(): number {
	const getPlayerSwitchInterpOutCurrentTime_result = Citizen.invokeNative<number>('0xED93D3690FF8AF5F', );
	return getPlayerSwitchInterpOutCurrentTime_result;
}