/**
 * MISC:GET_WIND_SPEED
 *
 * 0xDD9996B22AD9179C

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getWindSpeed(): number {
	const getWindSpeed_result = Citizen.invokeNative<number>('0xDD9996B22AD9179C', );
	return getWindSpeed_result;
}