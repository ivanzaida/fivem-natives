import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:DISABLE_HEAD_BLEND_PALETTE_COLOR
 *
 * 0x0C3579BA21459B45

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function disableHeadBlendPaletteColor(ped: PedIndex): void {
	const disableHeadBlendPaletteColor_result = Citizen.invokeNative<void>('0x0C3579BA21459B45', ped);
	return disableHeadBlendPaletteColor_result;
}