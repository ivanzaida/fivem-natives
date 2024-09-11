import { ENetGameserverTransactionStatus } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_DELETE_CHARACTER_GET_STATUS
 *
 * 0x93693D93BD53ACB1

 * 
 * ------------------------------------------------------------------
 * @returns {ENetGameserverTransactionStatus}  
 */
export function netGameserverDeleteCharacterGetStatus(): ENetGameserverTransactionStatus {
	const netGameserverDeleteCharacterGetStatus_result = Citizen.invokeNative<ENetGameserverTransactionStatus>('0x93693D93BD53ACB1', );
	return netGameserverDeleteCharacterGetStatus_result;
}