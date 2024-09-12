/**
 * GRAPHICS:GET_REQUESTINGNIGHTVISION
 *
 * 0x9A207D2459EC3958

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getRequestingnightvision(): boolean {
	const getRequestingnightvision_result = Citizen.invokeNative<boolean>('0x9A207D2459EC3958', );
	return getRequestingnightvision_result;
}