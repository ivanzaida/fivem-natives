/**
 * NETWORK:UGC_TEXTURE_DOWNLOAD_REQUEST
 *
 * 0x03A1BB16285A7B9C

 * 
 * Variant of TEXTURE_DOWNLOAD_REQUEST that uses UGC namespace. Same comments apply
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} contentID
 * @param {number} fileID
 * @param {number} fileVersion
 * @param {number} language
 * @param {string} textureName
 * @param {boolean} useCacheWithoutCloudChecks
 * @returns {number}  
 */
export function ugcTextureDownloadRequest(contentID: string, fileID: number, fileVersion: number, language: number, textureName: string, useCacheWithoutCloudChecks: boolean = false): number {
	const ugcTextureDownloadRequest_result = Citizen.invokeNative<number>('0x03A1BB16285A7B9C', contentID, fileID, fileVersion, language, textureName, useCacheWithoutCloudChecks);
	return ugcTextureDownloadRequest_result;
}