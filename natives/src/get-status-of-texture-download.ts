import { EPhotoOperationStatus } from '@ivanzaida/structures'

/**
 * NETWORK:GET_STATUS_OF_TEXTURE_DOWNLOAD
 *
 * 0x15C0F0A696091ACB

 * 
 * Queries the state of a texture download. The texture cannot be used until this command returns PHOTO_OPERATION_SUCCEEDED
 * 
 * 0 = succeeded
 * 1 = pending
 * 2 = failed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} textureDownloadHandle
 * @returns {EPhotoOperationStatus}  
 */
export function getStatusOfTextureDownload(textureDownloadHandle: number): EPhotoOperationStatus {
	const getStatusOfTextureDownload_result = Citizen.invokeNative<EPhotoOperationStatus>('0x15C0F0A696091ACB', textureDownloadHandle);
	return getStatusOfTextureDownload_result;
}