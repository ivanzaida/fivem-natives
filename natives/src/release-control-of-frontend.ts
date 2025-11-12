/**
 * HUD:RELEASE_CONTROL_OF_FRONTEND
 *
 * 0x9A6119E875538DA1

 * 
 * Enables frontend (works in custom frontends, not sure about regular pause menu) navigation keys on keyboard if they were disabled using the native below.
 * To disable the keys, use `0xEC9264727EEC0F28`
 * 
 * 
 * ------------------------------------------------------------------
 */
export function releaseControlOfFrontend(): void {
	const releaseControlOfFrontend_result = Citizen.invokeNative<void>('0x9A6119E875538DA1', );
	return releaseControlOfFrontend_result;
}