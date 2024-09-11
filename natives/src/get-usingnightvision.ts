/**
 * GRAPHICS:GET_USINGNIGHTVISION
 *
 * 0xDC7D2B438B687A13

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getUsingnightvision(): boolean {
	const getUsingnightvision_result = Citizen.invokeNative<boolean>('0xDC7D2B438B687A13', );
	return getUsingnightvision_result;
}