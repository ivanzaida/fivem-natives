/**
 * HUD:FORCE_SCRIPTED_GFX_WHEN_FRONTEND_ACTIVE
 *
 * 0xB1A3B2B046340845

 * 
 * Must be turned back to false by script
 * 
 * Not present in retail version of the game, actual definiton seems to be
 * _LOG_DEBUG_INFO(const char category, const char debugText);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allow
 */
export function forceScriptedGfxWhenFrontendActive(allow: boolean): void {
	const forceScriptedGfxWhenFrontendActive_result = Citizen.invokeNative<void>('0xB1A3B2B046340845', allow);
	return forceScriptedGfxWhenFrontendActive_result;
}