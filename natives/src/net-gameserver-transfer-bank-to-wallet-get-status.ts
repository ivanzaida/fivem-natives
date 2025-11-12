import { ENetGameserverTransactionStatus } from '@ivanzaida/structures'

/**
 * NETSHOPPING:NET_GAMESERVER_TRANSFER_BANK_TO_WALLET_GET_STATUS
 *
 * 0x2B3725FC402B94A8

 * 
 * Same as 0x350AA5EBC03D3BD2
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ENetGameserverTransactionStatus}  
 */
export function netGameserverTransferBankToWalletGetStatus(): ENetGameserverTransactionStatus {
	const netGameserverTransferBankToWalletGetStatus_result = Citizen.invokeNative<ENetGameserverTransactionStatus>('0x2B3725FC402B94A8', );
	return netGameserverTransferBankToWalletGetStatus_result;
}