import { NetworkIndex, IntRef, PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_DESTROYER_OF_NETWORK_ID
 *
 * 0x7B8DC32252146679

 * 
 * This command can be used for any physical objects withinthe game (e.g. cars, peds and objects).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {IntRef} typeOfWeapon [Ref]
 * @returns {PlayerIndex}  
 */
export function networkGetDestroyerOfNetworkId(networkId: NetworkIndex, typeOfWeapon: IntRef /* ptr */): PlayerIndex {
	const networkGetDestroyerOfNetworkId_result = Citizen.invokeNative<PlayerIndex>('0x7B8DC32252146679', networkId, typeOfWeapon.dataView);
	return networkGetDestroyerOfNetworkId_result;
}