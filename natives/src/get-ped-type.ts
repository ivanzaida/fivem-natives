import { PedIndex, EPedType } from '@ivanzaida/structures'

/**
 * PED:GET_PED_TYPE
 *
 * 0x0DFE7358172FC006

 * 
 * https://alloc8or.re/gta5/doc/enums/ePedType.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {EPedType}  
 */
export function getPedType(ped: PedIndex): EPedType {
	const getPedType_result = Citizen.invokeNative<EPedType>('0x0DFE7358172FC006', ped);
	return getPedType_result;
}