/**
 * CAM:DISABLE_ON_FOOT_FIRST_PERSON_VIEW_THIS_UPDATE
 *
 * 0x3968AF3046718EAC

 * 
 * Does not affect any other camera mode, so safe to call even when not in first person view.
 * 
 * Disables first person camera for the current frame.
 * 
 * Found in decompiled scripts:
 * GRAPHICS::DRAW_DEBUG_TEXT_2D("Disabling First Person Cam", 0.5, 0.8, 0.0, 0, 0, 255, 255);
 * CAM::DISABLE_ON_FOOT_FIRST_PERSON_VIEW_THIS_UPDATE();
 * 
 * 
 * ------------------------------------------------------------------
 */
export function disableOnFootFirstPersonViewThisUpdate(): void {
	const disableOnFootFirstPersonViewThisUpdate_result = Citizen.invokeNative<void>('0x3968AF3046718EAC', );
	return disableOnFootFirstPersonViewThisUpdate_result;
}