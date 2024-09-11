import { GamerHandlesMaxMinusOne } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_RESERVE_SLOTS_TRANSITION
 *
 * 0x66E498254807DB77

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandlesMaxMinusOne} gamers [Ref]
 * @param {number} numGamers
 * @param {number} reservationTime
 * @returns {boolean}  
 */
export function networkSessionReserveSlotsTransition(gamers: GamerHandlesMaxMinusOne /* ptr */, numGamers: number, reservationTime: number): boolean {
	const networkSessionReserveSlotsTransition_result = Citizen.invokeNative<boolean>('0x66E498254807DB77', gamers.dataView, numGamers, reservationTime);
	return networkSessionReserveSlotsTransition_result;
}