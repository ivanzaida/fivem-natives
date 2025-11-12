import { EEScriptHudComponent } from '@ivanzaida/structures'

/**
 * GRAPHICS:REQUEST_SCALEFORM_SCRIPT_HUD_MOVIE
 *
 * 0x98930EDD857375BF

 * 
 * Requests that a scaleform script hud movie is streamed in
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEScriptHudComponent} componentId
 */
export function requestScaleformScriptHudMovie(componentId: EEScriptHudComponent | number): void {
	const requestScaleformScriptHudMovie_result = Citizen.invokeNative<void>('0x98930EDD857375BF', componentId);
	return requestScaleformScriptHudMovie_result;
}