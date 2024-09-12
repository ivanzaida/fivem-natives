/**
 * GRAPHICS:GET_CURRENT_TV_CLIP_NAMEHASH
 *
 * 0xE51354CCCD89945F

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCurrentTvClipNamehash(): number {
	const getCurrentTvClipNamehash_result = Citizen.invokeNative<number>('0xE51354CCCD89945F', );
	return getCurrentTvClipNamehash_result;
}