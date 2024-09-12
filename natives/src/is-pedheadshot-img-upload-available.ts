/**
 * PED:IS_PEDHEADSHOT_IMG_UPLOAD_AVAILABLE
 *
 * 0x8F38E50ADC31E1C2

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isPedheadshotImgUploadAvailable(): boolean {
	const isPedheadshotImgUploadAvailable_result = Citizen.invokeNative<boolean>('0x8F38E50ADC31E1C2', );
	return isPedheadshotImgUploadAvailable_result;
}