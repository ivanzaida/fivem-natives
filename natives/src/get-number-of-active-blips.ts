/**
 * HUD:GET_NUMBER_OF_ACTIVE_BLIPS
 *
 * 0xC802478C8862BDAD

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumberOfActiveBlips(): number {
	const getNumberOfActiveBlips_result = Citizen.invokeNative<number>('0xC802478C8862BDAD', );
	return getNumberOfActiveBlips_result;
}