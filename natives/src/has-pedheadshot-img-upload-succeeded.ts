/**
 * PED:HAS_PEDHEADSHOT_IMG_UPLOAD_SUCCEEDED
 *
 * 0x39B1D02A82A412D3

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasPedheadshotImgUploadSucceeded(): boolean {
	const hasPedheadshotImgUploadSucceeded_result = Citizen.invokeNative<boolean>('0x39B1D02A82A412D3', );
	return hasPedheadshotImgUploadSucceeded_result;
}