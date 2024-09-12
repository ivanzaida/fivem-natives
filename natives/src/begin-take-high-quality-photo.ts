/**
 * GRAPHICS:BEGIN_TAKE_HIGH_QUALITY_PHOTO
 *
 * 0x48B40FC81A85F44B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function beginTakeHighQualityPhoto(): boolean {
	const beginTakeHighQualityPhoto_result = Citizen.invokeNative<boolean>('0x48B40FC81A85F44B', );
	return beginTakeHighQualityPhoto_result;
}