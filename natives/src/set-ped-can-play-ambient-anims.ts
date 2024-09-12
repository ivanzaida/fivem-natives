import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_PLAY_AMBIENT_ANIMS
 *
 * 0xC1BC1B8A5AA67C6B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} alllowAmbientAnims
 */
export function setPedCanPlayAmbientAnims(ped: PedIndex, alllowAmbientAnims: boolean): void {
	const setPedCanPlayAmbientAnims_result = Citizen.invokeNative<void>('0xC1BC1B8A5AA67C6B', ped, alllowAmbientAnims);
	return setPedCanPlayAmbientAnims_result;
}