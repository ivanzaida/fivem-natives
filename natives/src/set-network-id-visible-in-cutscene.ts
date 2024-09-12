import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_NETWORK_ID_VISIBLE_IN_CUTSCENE
 *
 * 0xEC34E75BDB02A4C6

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} visible
 * @param {boolean} remotelyVisible
 */
export function setNetworkIdVisibleInCutscene(networkId: NetworkIndex, visible: boolean, remotelyVisible: boolean = false): void {
	const setNetworkIdVisibleInCutscene_result = Citizen.invokeNative<void>('0xEC34E75BDB02A4C6', networkId, visible, remotelyVisible);
	return setNetworkIdVisibleInCutscene_result;
}