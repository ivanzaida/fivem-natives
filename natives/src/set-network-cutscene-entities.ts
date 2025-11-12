/**
 * NETWORK:SET_NETWORK_CUTSCENE_ENTITIES
 *
 * 0x6ABC02CAFE92B58C

 * 
 * If this called with TRUE, any entities subsequently created during a cutscene will be networked as normal. By default, entities
 * created during a cutscene are not networked as they are only needed locally for the cutscene.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} network
 */
export function setNetworkCutsceneEntities(network: boolean): void {
	const setNetworkCutsceneEntities_result = Citizen.invokeNative<void>('0x6ABC02CAFE92B58C', network);
	return setNetworkCutsceneEntities_result;
}