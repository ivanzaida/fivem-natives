import { EModColorType } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_NUM_MOD_COLORS
 *
 * 0x2A2B5BAE280E2FFA

 * 
 * If base is false it willr eturn the index of the specular color index. This only applies for MCT_PEARLESCENT, the rest have only one index
 * 
 * paintType:
 * 0: Normal
 * 1: Metallic
 * 2: Pearl
 * 3: Matte
 * 4: Metal
 * 5: Chrome
 * 6: Chameleon
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EModColorType} colorType
 * @param {boolean} base
 * @returns {number}  
 */
export function getNumModColors(colorType: EModColorType | number, base: boolean = true): number {
	const getNumModColors_result = Citizen.invokeNative<number>('0x2A2B5BAE280E2FFA', colorType, base);
	return getNumModColors_result;
}