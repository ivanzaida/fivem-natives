/**
 * NETWORK:NETWORK_GET_RANDOM_INT
 *
 * 0xFBC07BCFFCB8DD9B

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetRandomInt(): number {
	const networkGetRandomInt_result = Citizen.invokeNative<number>('0xFBC07BCFFCB8DD9B', );
	return networkGetRandomInt_result;
}