import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_ENABLE_PED_ENVEFF_SCALE
 *
 * 0xC91E7DFEE6F07739

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enable
 */
export function setEnablePedEnveffScale(ped: PedIndex, enable: boolean): void {
	const setEnablePedEnveffScale_result = Citizen.invokeNative<void>('0xC91E7DFEE6F07739', ped, enable);
	return setEnablePedEnveffScale_result;
}