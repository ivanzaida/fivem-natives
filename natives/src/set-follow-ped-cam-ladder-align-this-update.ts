/**
 * CAM:SET_FOLLOW_PED_CAM_LADDER_ALIGN_THIS_UPDATE
 *
 * 0xEF5DC41D990F8FD2

 * 
 * Forces follow ped camera to use ladder alignment code for next update.
 * Call this repeatedly during scripted sequences where this behaviour is required.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setFollowPedCamLadderAlignThisUpdate(): void {
	const setFollowPedCamLadderAlignThisUpdate_result = Citizen.invokeNative<void>('0xEF5DC41D990F8FD2', );
	return setFollowPedCamLadderAlignThisUpdate_result;
}