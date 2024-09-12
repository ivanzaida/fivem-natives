import { EDecalRendersettingId } from '@ivanzaida/structures'

/**
 * GRAPHICS:UNPATCH_DECAL_DIFFUSE_MAP
 *
 * 0x1B3B68D4F1783EBF

 * 
 * ------------------------------------------------------------------
 * @param {EDecalRendersettingId} renderSettingsId
 */
export function unpatchDecalDiffuseMap(renderSettingsId: EDecalRendersettingId | number): void {
	const unpatchDecalDiffuseMap_result = Citizen.invokeNative<void>('0x1B3B68D4F1783EBF', renderSettingsId);
	return unpatchDecalDiffuseMap_result;
}