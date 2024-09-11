/**
 * GRAPHICS:SET_STREAMED_TEXTURE_DICT_AS_NO_LONGER_NEEDED
 *
 * 0x633E3833FB96BCCB

 * 
 * ------------------------------------------------------------------
 * @param {string} txdName
 */
export function setStreamedTextureDictAsNoLongerNeeded(txdName: string): void {
	const setStreamedTextureDictAsNoLongerNeeded_result = Citizen.invokeNative<void>('0x633E3833FB96BCCB', txdName);
	return setStreamedTextureDictAsNoLongerNeeded_result;
}