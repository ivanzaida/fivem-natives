/**
 * HUD:FORCE_SONAR_BLIPS_THIS_FRAME
 *
 * 0xF45E267C70ACE01A

 * 
 * Doesn't actually return anything.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function forceSonarBlipsThisFrame(): boolean {
	const forceSonarBlipsThisFrame_result = Citizen.invokeNative<boolean>('0xF45E267C70ACE01A', );
	return forceSonarBlipsThisFrame_result;
}