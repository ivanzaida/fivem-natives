/**
 * CUTSCENE:SET_CAN_DISPLAY_MINIMAP_DURING_CUTSCENE_THIS_UPDATE
 *
 * 0xFABF472ADCE66A1E

 * 
 * ------------------------------------------------------------------
 */
export function setCanDisplayMinimapDuringCutsceneThisUpdate(): void {
	const setCanDisplayMinimapDuringCutsceneThisUpdate_result = Citizen.invokeNative<void>('0xFABF472ADCE66A1E', );
	return setCanDisplayMinimapDuringCutsceneThisUpdate_result;
}