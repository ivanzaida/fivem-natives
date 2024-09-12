import { EEScriptHudComponent } from '@ivanzaida/structures'

/**
 * HUD:HIDE_SCRIPTED_HUD_COMPONENT_THIS_FRAME
 *
 * 0xD10838CEA97E4725

 * 
 * ------------------------------------------------------------------
 * @param {EEScriptHudComponent} hudComponent
 */
export function hideScriptedHudComponentThisFrame(hudComponent: EEScriptHudComponent | number): void {
	const hideScriptedHudComponentThisFrame_result = Citizen.invokeNative<void>('0xD10838CEA97E4725', hudComponent);
	return hideScriptedHudComponentThisFrame_result;
}