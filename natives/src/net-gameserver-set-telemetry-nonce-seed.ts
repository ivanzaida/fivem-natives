/**
 * NETSHOPPING:NET_GAMESERVER_SET_TELEMETRY_NONCE_SEED
 *
 * 0x1F4C0FAC35E805F4

 * 
 * Before destroying successful transactions call this just before calling
 * This will permit to link the transaction to the telemetry.
 * IT IS IMPORTANT THAT YOU TEST URE CODE AND MAKE SURE YOU ARE SETTING THE
 * CORRECT NONCE SEED. FAILURE TO DO IT IS REALLY BAD....
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} transactionId
 * @returns {boolean}  
 */
export function netGameserverSetTelemetryNonceSeed(transactionId: number): boolean {
	const netGameserverSetTelemetryNonceSeed_result = Citizen.invokeNative<boolean>('0x1F4C0FAC35E805F4', transactionId);
	return netGameserverSetTelemetryNonceSeed_result;
}