/**
 * CAM:ARE_WIDESCREEN_BORDERS_ACTIVE
 *
 * 0xE7BF6BF496713374

 * 
 * set via SET_WIDESCREEN_BORDERS
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function areWidescreenBordersActive(): boolean {
	const areWidescreenBordersActive_result = Citizen.invokeNative<boolean>('0xE7BF6BF496713374', );
	return areWidescreenBordersActive_result;
}