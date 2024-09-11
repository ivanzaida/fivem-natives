import { ItemIndex } from '@ivanzaida/structures'

/**
 * DECORATOR:DECOR_GET_FLOAT
 *
 * 0x3D421DC31587DC44

 * 
 * ------------------------------------------------------------------
 * @param {ItemIndex} guid
 * @param {string} decoratorName
 * @returns {number}  
 */
export function decorGetFloat(guid: ItemIndex, decoratorName: string): number {
	const decorGetFloat_result = Citizen.invokeNative<number>('0x3D421DC31587DC44', guid, decoratorName);
	return decorGetFloat_result;
}