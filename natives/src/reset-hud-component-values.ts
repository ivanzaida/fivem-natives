import { EEHudComponent } from '@ivanzaida/structures'

/**
 * HUD:RESET_HUD_COMPONENT_VALUES
 *
 * 0xDCFF86AAD108A201

 * 
 * ------------------------------------------------------------------
 * @param {EEHudComponent} hudComponent
 */
export function resetHudComponentValues(hudComponent: EEHudComponent | number): void {
	const resetHudComponentValues_result = Citizen.invokeNative<void>('0xDCFF86AAD108A201', hudComponent);
	return resetHudComponentValues_result;
}