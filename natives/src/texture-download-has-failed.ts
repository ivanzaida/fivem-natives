/**
 * NETWORK:TEXTURE_DOWNLOAD_HAS_FAILED
 *
 * 0x26EA30089CAD115D

 * 
 * Queries whether a texture download request has failed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} textureDownloadHandle
 * @returns {boolean}  
 */
export function textureDownloadHasFailed(textureDownloadHandle: number): boolean {
	const textureDownloadHasFailed_result = Citizen.invokeNative<boolean>('0x26EA30089CAD115D', textureDownloadHandle);
	return textureDownloadHasFailed_result;
}