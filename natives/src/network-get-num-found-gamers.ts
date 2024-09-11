/**
 * NETWORK:NETWORK_GET_NUM_FOUND_GAMERS
 *
 * 0x7B74C2465094BAE7

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetNumFoundGamers(): number {
	const networkGetNumFoundGamers_result = Citizen.invokeNative<number>('0x7B74C2465094BAE7', );
	return networkGetNumFoundGamers_result;
}