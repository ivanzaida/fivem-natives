/**
 * NETWORK:SET_LOCAL_PLAYER_VISIBLE_IN_CUTSCENE
 *
 * 0x61780C0351CEFAD1

 * 
 * ------------------------------------------------------------------
 * @param {boolean} locallyVisible
 * @param {boolean} remotelyVisible
 */
export function setLocalPlayerVisibleInCutscene(locallyVisible: boolean, remotelyVisible: boolean = false): void {
	const setLocalPlayerVisibleInCutscene_result = Citizen.invokeNative<void>('0x61780C0351CEFAD1', locallyVisible, remotelyVisible);
	return setLocalPlayerVisibleInCutscene_result;
}