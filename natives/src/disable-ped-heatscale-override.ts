import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:DISABLE_PED_HEATSCALE_OVERRIDE
 *
 * 0x0CE75744CB55A9B5

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function disablePedHeatscaleOverride(ped: PedIndex): void {
	const disablePedHeatscaleOverride_result = Citizen.invokeNative<void>('0x0CE75744CB55A9B5', ped);
	return disablePedHeatscaleOverride_result;
}