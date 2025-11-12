import { PedheadshotId } from '@ivanzaida/structures'

/**
 * PED:REQUEST_PEDHEADSHOT_IMG_UPLOAD
 *
 * 0x63F7CF92622A91BF

 * 
 * Upload a headshot texture to the cloud. IS_PEDHEADSHOT_IMG_UPLOAD_AVAILABLE
 * should be called first to ensure the upload feature is not already in use,
 * otherwise the request will fail.
 * The user must ensure that the headshot remains active during the upload process.
 * The upload is asynchronous so the user must query the status of the request
 * to know whether it's failed or succeeded.
 * The request must be explicitly released by the user by calling
 * RELEASE_PEDHEADSHOT_IMG_UPLOAD, regardless of whether the request failed
 * or succeeded; otherwise, no further requests will be processed.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedheadshotId} headshotId
 * @returns {boolean}  
 */
export function requestPedheadshotImgUpload(headshotId: PedheadshotId): boolean {
	const requestPedheadshotImgUpload_result = Citizen.invokeNative<boolean>('0x63F7CF92622A91BF', headshotId);
	return requestPedheadshotImgUpload_result;
}