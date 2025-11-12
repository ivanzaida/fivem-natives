/**
 * NETSHOPPING:NET_GAMESERVER_TRANSFER_CASH_SET_TELEMETRY_NONCE_SEED
 *
 * 0x59E8FA762FB527C5

 * 
 * Before Calling another cash transfer and before calling the commands_money command that sets
 * telemetry call this command.
 * IT IS IMPORTANT THAT YOU TEST URE CODE AND MAKE SURE YOU ARE SETTING THE
 * CORRECT NONCE SEED. FAILURE TO DO IT IS REALLY BAD....
 * 
 * Used to be NETWORK_SHOP_CASH_TRANSFER_SET_TELEMETRY_NONCE_SEED
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverTransferCashSetTelemetryNonceSeed(): boolean {
	const netGameserverTransferCashSetTelemetryNonceSeed_result = Citizen.invokeNative<boolean>('0x59E8FA762FB527C5', );
	return netGameserverTransferCashSetTelemetryNonceSeed_result;
}