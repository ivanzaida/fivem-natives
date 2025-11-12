/**
 * GRAPHICS:PHONEPHOTOEDITOR_SET_FRAME_TXD
 *
 * 0xEB4A8AC9A591F10E

 * 
 * Sets the TXD containing the textures for the frame the system will use whenever the next photo is taken with the phone
 * (if PHONEPHOTOEDITOR is active).
 * The passed in TXD mustbe loaded; the PHONEPHOTOEDITOR will assert and fail (this function will return FALSE) otherwise.
 * This command can also be used to get rid of the current frame without having to disable the PHONEPHOTOEDITOR:
 * just call PHONEPHOTOEDITOR_SET_FRAME_TXD(NULL, TRUE)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} nameOfLoadedTXDForFrame
 * @param {boolean} justDisableCurrentFrame
 * @returns {boolean}  
 */
export function phonephotoeditorSetFrameTxd(nameOfLoadedTXDForFrame: string, justDisableCurrentFrame: boolean = false): boolean {
	const phonephotoeditorSetFrameTxd_result = Citizen.invokeNative<boolean>('0xEB4A8AC9A591F10E', nameOfLoadedTXDForFrame, justDisableCurrentFrame);
	return phonephotoeditorSetFrameTxd_result;
}