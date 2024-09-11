import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_PLAY_AMBIENT_BASE_ANIMS
 *
 * 0xD9757FAB956617BA

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} alllowAmbientAnims
 */
export function setPedCanPlayAmbientBaseAnims(ped: PedIndex, alllowAmbientAnims: boolean): void {
	const setPedCanPlayAmbientBaseAnims_result = Citizen.invokeNative<void>('0xD9757FAB956617BA', ped, alllowAmbientAnims);
	return setPedCanPlayAmbientBaseAnims_result;
}