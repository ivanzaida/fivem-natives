/**
 * AUDIO:GET_MUSIC_PLAYTIME
 *
 * 0x1304366BC7BE185B

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getMusicPlaytime(): number {
	const getMusicPlaytime_result = Citizen.invokeNative<number>('0x1304366BC7BE185B', );
	return getMusicPlaytime_result;
}