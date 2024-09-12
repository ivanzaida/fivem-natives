import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_DOES_NETWORK_ID_EXIST
 *
 * 0x2FC2FDC413532977

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @returns {boolean}  
 */
export function networkDoesNetworkIdExist(networkId: NetworkIndex): boolean {
	const networkDoesNetworkIdExist_result = Citizen.invokeNative<boolean>('0x2FC2FDC413532977', networkId);
	return networkDoesNetworkIdExist_result;
}