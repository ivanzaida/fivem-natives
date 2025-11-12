import { EEScriptHudComponent } from '@ivanzaida/structures'

/**
 * GRAPHICS:HAS_SCALEFORM_SCRIPT_HUD_MOVIE_LOADED
 *
 * 0x9E7C5A44096EB799

 * 
 * Returns whether the requested scaleform script hud movie is streamed in yet
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEScriptHudComponent} componentId
 * @returns {boolean}  
 */
export function hasScaleformScriptHudMovieLoaded(componentId: EEScriptHudComponent | number): boolean {
	const hasScaleformScriptHudMovieLoaded_result = Citizen.invokeNative<boolean>('0x9E7C5A44096EB799', componentId);
	return hasScaleformScriptHudMovieLoaded_result;
}