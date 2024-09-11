/**
 * AUDIO:GET_CURRENT_TV_SHOW_PLAY_TIME
 *
 * 0xDD3AA743AB7D4D75

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCurrentTvShowPlayTime(): number {
	const getCurrentTvShowPlayTime_result = Citizen.invokeNative<number>('0xDD3AA743AB7D4D75', );
	return getCurrentTvShowPlayTime_result;
}