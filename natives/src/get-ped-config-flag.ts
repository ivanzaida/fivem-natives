import { PedIndex, EPedConfigFlags } from '@ivanzaida/structures'

/**
 * PED:GET_PED_CONFIG_FLAG
 *
 * 0x49F8918E2DC5FFBC

 * 
 * See SET_PED_CONFIG_FLAG
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedConfigFlags} configFlag
 * @param {boolean} doDeadCheck
 * @returns {boolean}  
 */
export function getPedConfigFlag(ped: PedIndex, configFlag: EPedConfigFlags | number, doDeadCheck: boolean = true): boolean {
	const getPedConfigFlag_result = Citizen.invokeNative<boolean>('0x49F8918E2DC5FFBC', ped, configFlag, doDeadCheck);
	return getPedConfigFlag_result;
}