import { EEScriptHudComponent } from '@ivanzaida/structures'

/**
 * HUD:IS_SCRIPTED_HUD_COMPONENT_ACTIVE
 *
 * 0xFF455647AC47F397

 * 
 * ------------------------------------------------------------------
 * @param {EEScriptHudComponent} hudComponent
 * @returns {boolean}  
 */
export function isScriptedHudComponentActive(hudComponent: EEScriptHudComponent | number): boolean {
	const isScriptedHudComponentActive_result = Citizen.invokeNative<boolean>('0xFF455647AC47F397', hudComponent);
	return isScriptedHudComponentActive_result;
}