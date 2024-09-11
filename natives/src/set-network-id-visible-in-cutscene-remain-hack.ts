import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_NETWORK_ID_VISIBLE_IN_CUTSCENE_REMAIN_HACK
 *
 * 0x82EDE1ECB3BF1ADF

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} set
 */
export function setNetworkIdVisibleInCutsceneRemainHack(networkId: NetworkIndex, set: boolean): void {
	const setNetworkIdVisibleInCutsceneRemainHack_result = Citizen.invokeNative<void>('0x82EDE1ECB3BF1ADF', networkId, set);
	return setNetworkIdVisibleInCutsceneRemainHack_result;
}