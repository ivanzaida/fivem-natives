import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_MP_LIGHT_ENABLED
 *
 * 0xAA5FEAAE62F40979

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function getMpLightEnabled(ped: PedIndex): boolean {
	const getMpLightEnabled_result = Citizen.invokeNative<boolean>('0xAA5FEAAE62F40979', ped);
	return getMpLightEnabled_result;
}