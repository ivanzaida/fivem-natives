import { ENetGameserverTransactionStatus } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_TRANSFER_WALLET_TO_BANK_GET_STATUS
 *
 * 0x606408352C7741AD

 * 
 * Same as 0x23789E777D14CE44
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ENetGameserverTransactionStatus}  
 */
export function netGameserverTransferWalletToBankGetStatus(): ENetGameserverTransactionStatus {
	const netGameserverTransferWalletToBankGetStatus_result = Citizen.invokeNative<ENetGameserverTransactionStatus>('0x606408352C7741AD', );
	return netGameserverTransferWalletToBankGetStatus_result;
}