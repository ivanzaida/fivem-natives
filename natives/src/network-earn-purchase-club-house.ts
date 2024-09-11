import { SpendClubHouse } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_EARN_PURCHASE_CLUB_HOUSE
 *
 * 0x94F7718638A3525D

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {SpendClubHouse} data [Ref]
 */
export function networkEarnPurchaseClubHouse(amount: number, data: SpendClubHouse /* ptr */): void {
	const networkEarnPurchaseClubHouse_result = Citizen.invokeNative<void>('0x94F7718638A3525D', amount, data.dataView);
	return networkEarnPurchaseClubHouse_result;
}