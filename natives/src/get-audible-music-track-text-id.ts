/**
 * AUDIO:GET_AUDIBLE_MUSIC_TRACK_TEXT_ID
 *
 * 0x6E5F2B4C6A398419

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getAudibleMusicTrackTextId(): number {
	const getAudibleMusicTrackTextId_result = Citizen.invokeNative<number>('0x6E5F2B4C6A398419', );
	return getAudibleMusicTrackTextId_result;
}