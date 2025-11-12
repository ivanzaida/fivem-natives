/**
 * GRAPHICS:HAS_STREAMED_TEXTURE_DICT_LOADED
 *
 * 0x38D063D8CF6D1967

 * 
 * After requesting a streamed txd, call this command to check when the txd has finished streaming. It will return TRUE once the txd has loaded.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} txdName
 * @returns {boolean}  
 */
export function hasStreamedTextureDictLoaded(txdName: string): boolean {
	const hasStreamedTextureDictLoaded_result = Citizen.invokeNative<boolean>('0x38D063D8CF6D1967', txdName);
	return hasStreamedTextureDictLoaded_result;
}