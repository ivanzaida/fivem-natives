/**
 * NETWORK:NETWORK_ON_RETURN_TO_SINGLE_PLAYER
 *
 * 0x2920E3AB45CC75B8

 * 
 * ------------------------------------------------------------------
 */
export function networkOnReturnToSinglePlayer(): void {
	const networkOnReturnToSinglePlayer_result = Citizen.invokeNative<void>('0x2920E3AB45CC75B8', );
	return networkOnReturnToSinglePlayer_result;
}