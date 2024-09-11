import { PedIndex, EPedCompFlags } from '@ivanzaida/structures'

/**
 * PED:SET_PED_HELMET_FLAG
 *
 * 0x2D581D395A36F669

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedCompFlags} helmetPropFlag
 */
export function setPedHelmetFlag(ped: PedIndex, helmetPropFlag: EPedCompFlags | number = 4096): void {
	const setPedHelmetFlag_result = Citizen.invokeNative<void>('0x2D581D395A36F669', ped, helmetPropFlag);
	return setPedHelmetFlag_result;
}