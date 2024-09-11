import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_PLAYER_ANGRY
 *
 * 0x892251E58BAE563B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} isAngry
 */
export function setPlayerAngry(ped: PedIndex, isAngry: boolean): void {
	const setPlayerAngry_result = Citizen.invokeNative<void>('0x892251E58BAE563B', ped, isAngry);
	return setPlayerAngry_result;
}