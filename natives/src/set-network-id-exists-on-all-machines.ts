import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_NETWORK_ID_EXISTS_ON_ALL_MACHINES
 *
 * 0x3C1752E361ED8FC9

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} existsOnAll
 */
export function setNetworkIdExistsOnAllMachines(networkId: NetworkIndex, existsOnAll: boolean): void {
	const setNetworkIdExistsOnAllMachines_result = Citizen.invokeNative<void>('0x3C1752E361ED8FC9', networkId, existsOnAll);
	return setNetworkIdExistsOnAllMachines_result;
}