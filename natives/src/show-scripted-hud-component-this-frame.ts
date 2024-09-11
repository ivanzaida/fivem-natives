import { EEScriptHudComponent } from '@ivanzaida/structures'

/**
 * HUD:SHOW_SCRIPTED_HUD_COMPONENT_THIS_FRAME
 *
 * 0x06DF266B26D6C535

 * 
 * ------------------------------------------------------------------
 * @param {EEScriptHudComponent} hudComponent
 */
export function showScriptedHudComponentThisFrame(hudComponent: EEScriptHudComponent | number): void {
	const showScriptedHudComponentThisFrame_result = Citizen.invokeNative<void>('0x06DF266B26D6C535', hudComponent);
	return showScriptedHudComponentThisFrame_result;
}