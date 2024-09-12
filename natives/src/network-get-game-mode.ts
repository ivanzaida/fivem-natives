/**
 * NETWORK:NETWORK_GET_GAME_MODE
 *
 * 0x83E35AD37CFCE6F6

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetGameMode(): number {
	const networkGetGameMode_result = Citizen.invokeNative<number>('0x83E35AD37CFCE6F6', );
	return networkGetGameMode_result;
}