/**
 * NETWORK:ARE_CUTSCENE_ENTITIES_NETWORKED
 *
 * 0x2E0CDDCB2AD38385

 * 
 * Getter for SET_NETWORK_CUTSCENE_ENTITIES.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function areCutsceneEntitiesNetworked(): boolean {
	const areCutsceneEntitiesNetworked_result = Citizen.invokeNative<boolean>('0x2E0CDDCB2AD38385', );
	return areCutsceneEntitiesNetworked_result;
}