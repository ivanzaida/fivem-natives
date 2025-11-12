import { PedIndex, NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:PED_TO_NET
 *
 * 0x9F7A52B1537567AC

 * 
 * gets the network id of a ped
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} pedID
 * @returns {NetworkIndex}  
 */
export function pedToNet(pedID: PedIndex): NetworkIndex {
	const pedToNet_result = Citizen.invokeNative<NetworkIndex>('0x9F7A52B1537567AC', pedID);
	return pedToNet_result;
}