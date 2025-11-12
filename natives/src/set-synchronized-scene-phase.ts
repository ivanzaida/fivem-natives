/**
 * PED:SET_SYNCHRONIZED_SCENE_PHASE
 *
 * 0x7BB893EF8F683419

 * 
 * Use this command to change a synchronised scene's phase after it has been created. Changing the phase of a synced
 * scene will update the phases of any objects attached to it.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 * @param {number} phase
 */
export function setSynchronizedScenePhase(sceneID: number, phase: number): void {
	const setSynchronizedScenePhase_result = Citizen.invokeNative<void>('0x7BB893EF8F683419', sceneID, phase);
	return setSynchronizedScenePhase_result;
}