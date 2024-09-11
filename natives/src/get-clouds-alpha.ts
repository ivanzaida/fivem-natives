/**
 * MISC:GET_CLOUDS_ALPHA
 *
 * 0xB5B278F6D1EBCD53

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCloudsAlpha(): number {
	const getCloudsAlpha_result = Citizen.invokeNative<number>('0xB5B278F6D1EBCD53', );
	return getCloudsAlpha_result;
}