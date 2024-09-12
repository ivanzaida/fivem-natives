import { GamerHandle, EPlayerListType } from '@ivanzaida/structures'

/**
 * NETWORK:FILLOUT_PM_PLAYER_LIST_WITH_NAMES
 *
 * 0xD57BC2EBAE7CB358

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandles
 * @param {string} gamerNames
 * @param {number} count
 * @param {EPlayerListType} type
 * @returns {boolean}  
 */
export function filloutPmPlayerListWithNames(gamerHandles: GamerHandle, gamerNames: string, count: number, type: EPlayerListType | number = 102): boolean {
	const filloutPmPlayerListWithNames_result = Citizen.invokeNative<boolean>('0xD57BC2EBAE7CB358', gamerHandles, gamerNames, count, type);
	return filloutPmPlayerListWithNames_result;
}