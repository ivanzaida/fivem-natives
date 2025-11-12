/**
 * NETWORK:NETWORK_SESSION_SET_SCRIPT_VALIDATE_JOIN
 *
 * 0x19B1BD7BD2BA430B

 * 
 * Functions to allow script to validate a join. These are used to allow join failure for conditions
 * that may not be checked in code allowing us to re-enter the matchmaking flow.
 * Call NETWORK_SESSION_SET_SCRIPT_VALIDATE_JOIN when script run condition checks after joining to enable.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkSessionSetScriptValidateJoin(): void {
	const networkSessionSetScriptValidateJoin_result = Citizen.invokeNative<void>('0x19B1BD7BD2BA430B', );
	return networkSessionSetScriptValidateJoin_result;
}