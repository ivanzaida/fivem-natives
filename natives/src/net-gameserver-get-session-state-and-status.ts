import { IntRef } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_GET_SESSION_STATE_AND_STATUS
 *
 * 0x8A77EAFEB55D476D

 * 
 * True when we're waiting for a refresh from the server.  This can happen when the game token times out.  The server will
 * send a GAMESERVER_ERROR_INVALID_NONCE or GAMESERVER_ERROR_EXPIRED_TOKEN
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} currentState [Ref]
 * @param {IntRef} refreshSessionRequested [Ref]
 * @returns {boolean}  
 */
export function netGameserverGetSessionStateAndStatus(currentState: IntRef /* ptr */, refreshSessionRequested: IntRef /* ptr */): boolean {
	const netGameserverGetSessionStateAndStatus_result = Citizen.invokeNative<boolean>('0x8A77EAFEB55D476D', currentState.dataView, refreshSessionRequested.dataView);
	return netGameserverGetSessionStateAndStatus_result;
}