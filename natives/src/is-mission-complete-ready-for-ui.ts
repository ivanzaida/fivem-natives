/**
 * AUDIO:IS_MISSION_COMPLETE_READY_FOR_UI
 *
 * 0x1FC87F78B679BE3D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMissionCompleteReadyForUi(): boolean {
	const isMissionCompleteReadyForUi_result = Citizen.invokeNative<boolean>('0x1FC87F78B679BE3D', );
	return isMissionCompleteReadyForUi_result;
}