import { PedIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:OVERRIDE_PED_CREW_LOGO_TEXTURE
 *
 * 0xAAE0CF56E250FA77

 * 
 * Overriding ped badge texture to a passed texture. It's synced between players (even custom textures!), don't forget to request used dict on all clients to make it sync properly. Can be removed by passing empty strings.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} textureDictionaryName
 * @param {string} textureName
 * @returns {boolean}  
 */
export function overridePedCrewLogoTexture(ped: PedIndex, textureDictionaryName: string, textureName: string): boolean {
	const overridePedCrewLogoTexture_result = Citizen.invokeNative<boolean>('0xAAE0CF56E250FA77', ped, textureDictionaryName, textureName);
	return overridePedCrewLogoTexture_result;
}