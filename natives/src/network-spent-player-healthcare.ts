import { PlayerIndex } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_PLAYER_HEALTHCARE
 *
 * 0x034CF401503972D8

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {PlayerIndex} player
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPlayerHealthcare(amount: number, player: PlayerIndex, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPlayerHealthcare_result = Citizen.invokeNative<void>('0x034CF401503972D8', amount, player, fromBank, fromBankAndWallet);
	return networkSpentPlayerHealthcare_result;
}