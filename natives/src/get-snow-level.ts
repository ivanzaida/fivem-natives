/**
 * MISC:GET_SNOW_LEVEL
 *
 * 0xB68ECCFF52582B84

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getSnowLevel(): number {
	const getSnowLevel_result = Citizen.invokeNative<number>('0xB68ECCFF52582B84', );
	return getSnowLevel_result;
}