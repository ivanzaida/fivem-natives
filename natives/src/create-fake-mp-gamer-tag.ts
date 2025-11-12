import { PedIndex } from '@ivanzaida/structures'

/**
 * HUD:CREATE_FAKE_MP_GAMER_TAG
 *
 * 0x2E4ECC451E3A3AD9

 * 
 * clanFlag: takes a number 0-5
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} playerName
 * @param {boolean} crewTypeIsPrivate
 * @param {boolean} crewTagContainsRockstar
 * @param {string} crewTag
 * @param {number} crewRank
 * @returns {number}  
 */
export function createFakeMpGamerTag(ped: PedIndex, playerName: string, crewTypeIsPrivate: boolean, crewTagContainsRockstar: boolean, crewTag: string, crewRank: number): number {
	const createFakeMpGamerTag_result = Citizen.invokeNative<number>('0x2E4ECC451E3A3AD9', ped, playerName, crewTypeIsPrivate, crewTagContainsRockstar, crewTag, crewRank);
	return createFakeMpGamerTag_result;
}