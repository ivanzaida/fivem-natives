/**
 * GRAPHICS:IS_TVSHOW_CURRENTLY_PLAYING
 *
 * 0x2200033BCF24787D

 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @returns {boolean}  
 */
export function isTvshowCurrentlyPlaying(nameHash: number): boolean {
	const isTvshowCurrentlyPlaying_result = Citizen.invokeNative<boolean>('0x2200033BCF24787D', nameHash);
	return isTvshowCurrentlyPlaying_result;
}