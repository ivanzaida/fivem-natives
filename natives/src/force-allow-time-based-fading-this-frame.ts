/**
 * STREAMING:FORCE_ALLOW_TIME_BASED_FADING_THIS_FRAME
 *
 * 0xC31FD6E2FE1930B9

 * 
 * force-enable time-based LOD fading this frame. This is a very special-case command intended for car-steal eye in the sky mission etc.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function forceAllowTimeBasedFadingThisFrame(): void {
	const forceAllowTimeBasedFadingThisFrame_result = Citizen.invokeNative<void>('0xC31FD6E2FE1930B9', );
	return forceAllowTimeBasedFadingThisFrame_result;
}