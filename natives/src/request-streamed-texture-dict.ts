/**
 * GRAPHICS:REQUEST_STREAMED_TEXTURE_DICT
 *
 * 0xD0D00ED689D6CA81

 * 
 * The .img file should contain platform-specific txds and the filename should be listed in X:\project\build\common\data\images.txt.
 * After requesting the txd, you should check HAS_STREAMED_TXD_LOADED in the same way as you do for models and animations.
 * This command is a streamed version of LOAD_TXD.
 * 
 * This function can requests texture dictonaries from following RPFs:
 * scaleform_generic.rpf
 * scaleform_minigames.rpf
 * scaleform_minimap.rpf
 * scaleform_web.rpf
 * 
 * last param isnt a toggle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} txdName
 * @param {boolean} priority
 */
export function requestStreamedTextureDict(txdName: string, priority: boolean = false): void {
	const requestStreamedTextureDict_result = Citizen.invokeNative<void>('0xD0D00ED689D6CA81', txdName, priority);
	return requestStreamedTextureDict_result;
}