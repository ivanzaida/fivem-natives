/**
 * NETWORK:TEXTURE_DOWNLOAD_GET_NAME
 *
 * 0x6DE51300ACD3E3F3

 * 
 * Queries the name of the texture for a given handle. The texture cannot be used until this commands
 * returns a valid string.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} textureDownloadHandle
 * @returns {string}  
 */
export function textureDownloadGetName(textureDownloadHandle: number): string {
	const textureDownloadGetName_result = Citizen.invokeNative<string>('0x6DE51300ACD3E3F3', textureDownloadHandle);
	return textureDownloadGetName_result;
}