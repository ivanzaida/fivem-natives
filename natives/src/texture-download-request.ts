import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:TEXTURE_DOWNLOAD_REQUEST
 *
 * 0x1905CE168C7AF873

 * 
 * Requests to download a texture from member space. The texture will not be immediately available; the user needs to query its state
 * by calling TEXTURE_DOWNLOAD_HAS_FAILED, TEXTURE_DOWNLOAD_GET_NAME or GET_STATUS_OF_TEXTURE_DOWNLOAD
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {string} cloudPath
 * @param {string} textureName
 * @param {boolean} useCacheWithoutCloudChecks
 * @returns {number}  
 */
export function textureDownloadRequest(gamerHandle: GamerHandle /* ptr */, cloudPath: string, textureName: string, useCacheWithoutCloudChecks: boolean = false): number {
	const textureDownloadRequest_result = Citizen.invokeNative<number>('0x1905CE168C7AF873', gamerHandle.dataView, cloudPath, textureName, useCacheWithoutCloudChecks);
	return textureDownloadRequest_result;
}