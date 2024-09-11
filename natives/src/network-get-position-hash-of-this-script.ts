/**
 * NETWORK:NETWORK_GET_POSITION_HASH_OF_THIS_SCRIPT
 *
 * 0x4C7F9ACFABADEB9E

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetPositionHashOfThisScript(): number {
	const networkGetPositionHashOfThisScript_result = Citizen.invokeNative<number>('0x4C7F9ACFABADEB9E', );
	return networkGetPositionHashOfThisScript_result;
}