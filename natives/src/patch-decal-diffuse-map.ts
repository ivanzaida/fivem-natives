import { EDecalRendersettingId } from '@ivanzaida/structures'

/**
 * GRAPHICS:PATCH_DECAL_DIFFUSE_MAP
 *
 * 0x1CB4702EAE3C89AB

 * 
 * ------------------------------------------------------------------
 * @param {EDecalRendersettingId} renderSettingsId
 * @param {string} diffuseMapDictionaryName
 * @param {string} diffuseMapName
 */
export function patchDecalDiffuseMap(renderSettingsId: EDecalRendersettingId | number, diffuseMapDictionaryName: string, diffuseMapName: string): void {
	const patchDecalDiffuseMap_result = Citizen.invokeNative<void>('0x1CB4702EAE3C89AB', renderSettingsId, diffuseMapDictionaryName, diffuseMapName);
	return patchDecalDiffuseMap_result;
}