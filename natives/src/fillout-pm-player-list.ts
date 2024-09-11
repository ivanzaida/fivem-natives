import { GamerHandle, EPlayerListType } from '@ivanzaida/structures'

/**
 * NETWORK:FILLOUT_PM_PLAYER_LIST
 *
 * 0x403A85E50E14F1BD

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandles
 * @param {number} count
 * @param {EPlayerListType} type
 * @returns {boolean}  
 */
export function filloutPmPlayerList(gamerHandles: GamerHandle, count: number, type: EPlayerListType | number = 102): boolean {
	const filloutPmPlayerList_result = Citizen.invokeNative<boolean>('0x403A85E50E14F1BD', gamerHandles, count, type);
	return filloutPmPlayerList_result;
}