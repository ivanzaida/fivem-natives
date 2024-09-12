import { EEScriptHudComponent } from '@ivanzaida/structures'

/**
 * HUD:IS_SCRIPTED_HUD_COMPONENT_HIDDEN_THIS_FRAME
 *
 * 0xDBDF2670A7C650DF

 * 
 * ------------------------------------------------------------------
 * @param {EEScriptHudComponent} hudComponent
 * @returns {boolean}  
 */
export function isScriptedHudComponentHiddenThisFrame(hudComponent: EEScriptHudComponent | number): boolean {
	const isScriptedHudComponentHiddenThisFrame_result = Citizen.invokeNative<boolean>('0xDBDF2670A7C650DF', hudComponent);
	return isScriptedHudComponentHiddenThisFrame_result;
}