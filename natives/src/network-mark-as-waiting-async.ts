/**
 * NETWORK:NETWORK_MARK_AS_WAITING_ASYNC
 *
 * 0x5B6118C4A1363B02

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isWaitingAsync
 */
export function networkMarkAsWaitingAsync(isWaitingAsync: boolean): void {
	const networkMarkAsWaitingAsync_result = Citizen.invokeNative<void>('0x5B6118C4A1363B02', isWaitingAsync);
	return networkMarkAsWaitingAsync_result;
}