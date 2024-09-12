import { EEStripClubExpenditureType } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_SPENT_IN_STRIPCLUB
 *
 * 0x5B01531ADF19BFE7

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {EEStripClubExpenditureType} expenditureType
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentInStripclub(amount: number, fromBank: boolean = false, expenditureType: EEStripClubExpenditureType | number = 0, fromBankAndWallet: boolean = false): void {
	const networkSpentInStripclub_result = Citizen.invokeNative<void>('0x5B01531ADF19BFE7', amount, fromBank, expenditureType, fromBankAndWallet);
	return networkSpentInStripclub_result;
}