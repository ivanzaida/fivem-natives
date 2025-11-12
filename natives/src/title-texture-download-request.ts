/**
 * NETWORK:TITLE_TEXTURE_DOWNLOAD_REQUEST
 *
 * 0x30B65E94C2188C92

 * 
 * Variant of TEXTURE_DOWNLOAD_REQUEST that uses TITLE namespace. Same comments apply
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cloudPath
 * @param {string} textureName
 * @param {boolean} useCacheWithoutCloudChecks
 * @returns {number}  
 */
export function titleTextureDownloadRequest(cloudPath: string, textureName: string, useCacheWithoutCloudChecks: boolean = false): number {
	const titleTextureDownloadRequest_result = Citizen.invokeNative<number>('0x30B65E94C2188C92', cloudPath, textureName, useCacheWithoutCloudChecks);
	return titleTextureDownloadRequest_result;
}