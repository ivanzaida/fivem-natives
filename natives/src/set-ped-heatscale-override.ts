import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_HEATSCALE_OVERRIDE
 *
 * 0x3A99D838C9A7E1A7

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} heatScale
 */
export function setPedHeatscaleOverride(ped: PedIndex, heatScale: number): void {
	const setPedHeatscaleOverride_result = Citizen.invokeNative<void>('0x3A99D838C9A7E1A7', ped, heatScale);
	return setPedHeatscaleOverride_result;
}