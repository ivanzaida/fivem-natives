import { PedIndex, EPedVisemeFlags } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_PLAY_VISEME_ANIMS
 *
 * 0x5260CB9F2F8EA05A

 * 
 * p2 usually 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} allowVisemeAnims
 * @param {EPedVisemeFlags} flags
 */
export function setPedCanPlayVisemeAnims(ped: PedIndex, allowVisemeAnims: boolean, flags: EPedVisemeFlags | number = 0): void {
	const setPedCanPlayVisemeAnims_result = Citizen.invokeNative<void>('0x5260CB9F2F8EA05A', ped, allowVisemeAnims, flags);
	return setPedCanPlayVisemeAnims_result;
}