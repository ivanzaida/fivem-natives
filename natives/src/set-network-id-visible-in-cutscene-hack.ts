import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_NETWORK_ID_VISIBLE_IN_CUTSCENE_HACK
 *
 * 0x22CE5B137F505B14

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} visible
 * @param {boolean} remotelyVisible
 */
export function setNetworkIdVisibleInCutsceneHack(networkId: NetworkIndex, visible: boolean, remotelyVisible: boolean = false): void {
	const setNetworkIdVisibleInCutsceneHack_result = Citizen.invokeNative<void>('0x22CE5B137F505B14', networkId, visible, remotelyVisible);
	return setNetworkIdVisibleInCutsceneHack_result;
}