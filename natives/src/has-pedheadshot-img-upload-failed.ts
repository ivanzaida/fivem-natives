/**
 * PED:HAS_PEDHEADSHOT_IMG_UPLOAD_FAILED
 *
 * 0xFE3891B19F28B05F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasPedheadshotImgUploadFailed(): boolean {
	const hasPedheadshotImgUploadFailed_result = Citizen.invokeNative<boolean>('0xFE3891B19F28B05F', );
	return hasPedheadshotImgUploadFailed_result;
}