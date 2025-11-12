import { EEScriptHudComponent } from '@ivanzaida/structures'

/**
 * GRAPHICS:BEGIN_SCALEFORM_SCRIPT_HUD_MOVIE_METHOD
 *
 * 0x192A6D8B6BBD4F41

 * 
 * start of an actionscript method called on a script hud component
 * 
 * Pushes a function from the Hud component Scaleform onto the stack. Same behavior as GRAPHICS::BEGIN_SCALEFORM_MOVIE_METHOD, just a hud component id instead of a Scaleform.
 * 
 * Known components:
 * 19 - MP_RANK_BAR
 * 20 - HUD_DIRECTOR_MODE
 * 
 * This native requires more research - all information can be found inside of 'hud.gfx'. Using a decompiler, the different components are located under "scripts\__Packages\com\rockstargames\gtav\hud\hudComponents" and "scripts\__Packages\com\rockstargames\gtav\Multiplayer".
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEScriptHudComponent} scriptHudId
 * @param {string} methodName
 * @returns {boolean}  
 */
export function beginScaleformScriptHudMovieMethod(scriptHudId: EEScriptHudComponent | number, methodName: string): boolean {
	const beginScaleformScriptHudMovieMethod_result = Citizen.invokeNative<boolean>('0x192A6D8B6BBD4F41', scriptHudId, methodName);
	return beginScaleformScriptHudMovieMethod_result;
}