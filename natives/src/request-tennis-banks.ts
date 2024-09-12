import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:REQUEST_TENNIS_BANKS
 *
 * 0x08E29D89D4C88997

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} opponentPed
 */
export function requestTennisBanks(opponentPed: PedIndex): void {
	const requestTennisBanks_result = Citizen.invokeNative<void>('0x08E29D89D4C88997', opponentPed);
	return requestTennisBanks_result;
}