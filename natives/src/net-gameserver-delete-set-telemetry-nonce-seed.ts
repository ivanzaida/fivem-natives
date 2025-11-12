/**
 * NETSHOPPING:NET_GAMESERVER_DELETE_SET_TELEMETRY_NONCE_SEED
 *
 * 0x203607236413B185

 * 
 * Before Calling another character delete and before calling the commands_money command that sets
 * telemtry call this command.
 * IT IS IMPORTANT THAT YOU TEST URE CODE AND MAKE SURE YOU ARE SETTING THE
 * CORRECT NONCE SEED. FAILURE TO DO IT IS REALLY BAD....
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverDeleteSetTelemetryNonceSeed(): boolean {
	const netGameserverDeleteSetTelemetryNonceSeed_result = Citizen.invokeNative<boolean>('0x203607236413B185', );
	return netGameserverDeleteSetTelemetryNonceSeed_result;
}