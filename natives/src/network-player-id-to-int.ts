/**
 * PLAYER:NETWORK_PLAYER_ID_TO_INT
 *
 * 0x383461852896D73D

 * 
 * Does exactly the same thing as PLAYER_ID()
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkPlayerIdToInt(): number {
	const networkPlayerIdToInt_result = Citizen.invokeNative<number>('0x383461852896D73D', );
	return networkPlayerIdToInt_result;
}