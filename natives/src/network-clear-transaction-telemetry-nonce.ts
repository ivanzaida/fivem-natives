/**
 * MONEY:_NETWORK_CLEAR_TRANSACTION_TELEMETRY_NONCE
 *
 * 0xE03B9F95556E48E9

 * 
 * ------------------------------------------------------------------
 */
export function networkClearTransactionTelemetryNonce(): void {
	const networkClearTransactionTelemetryNonce_result = Citizen.invokeNative<void>('0xE03B9F95556E48E9', );
	return networkClearTransactionTelemetryNonce_result;
}