import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_SHADER_READY
 *
 * 0xE87274DCAEC35329

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedShaderReady(ped: PedIndex): boolean {
	const isPedShaderReady_result = Citizen.invokeNative<boolean>('0xE87274DCAEC35329', ped);
	return isPedShaderReady_result;
}