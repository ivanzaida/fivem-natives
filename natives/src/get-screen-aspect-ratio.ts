/**
 * GRAPHICS:GET_SCREEN_ASPECT_RATIO
 *
 * 0x0DEE1875A0F6FC5F

 * 
 * DEPRECATED
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getScreenAspectRatio(): number {
	const getScreenAspectRatio_result = Citizen.invokeNative<number>('0x0DEE1875A0F6FC5F', );
	return getScreenAspectRatio_result;
}