import { EThermalbehaviour } from '@ivanzaida/structures'

/**
 * GRAPHICS:SEETHROUGH_SET_HEATSCALE
 *
 * 0xC5F88620264793E1

 * 
 * min: 0.0
 * max: 0.75
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EThermalbehaviour} type
 * @param {number} param
 */
export function seethroughSetHeatscale(type: EThermalbehaviour | number, param: number): void {
	const seethroughSetHeatscale_result = Citizen.invokeNative<void>('0xC5F88620264793E1', type, param);
	return seethroughSetHeatscale_result;
}