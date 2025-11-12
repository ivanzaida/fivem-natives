/**
 * MISC:GET_CITY_DENSITY
 *
 * 0xAB154BFC15F33733

 * 
 * Returns the city density settings (0.0f->1.0f)
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCityDensity(): number {
	const getCityDensity_result = Citizen.invokeNative<number>('0xAB154BFC15F33733', );
	return getCityDensity_result;
}