import { EEScriptHudComponent } from '@ivanzaida/structures'

/**
 * GRAPHICS:REMOVE_SCALEFORM_SCRIPT_HUD_MOVIE
 *
 * 0xE38DA3B12A4DAB3B

 * 
 * removes a scripted hud movie
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEScriptHudComponent} componentId
 */
export function removeScaleformScriptHudMovie(componentId: EEScriptHudComponent | number): void {
	const removeScaleformScriptHudMovie_result = Citizen.invokeNative<void>('0xE38DA3B12A4DAB3B', componentId);
	return removeScaleformScriptHudMovie_result;
}