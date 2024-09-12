/**
 * NETWORK:NETWORK_CLEAR_GET_GAMER_STATUS
 *
 * 0x1718FDF9693BFC2B

 * 
 * ------------------------------------------------------------------
 */
export function networkClearGetGamerStatus(): void {
	const networkClearGetGamerStatus_result = Citizen.invokeNative<void>('0x1718FDF9693BFC2B', );
	return networkClearGetGamerStatus_result;
}