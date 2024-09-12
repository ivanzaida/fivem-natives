/**
 * STATS:STAT_DELETE_SLOT
 *
 * 0xD808EAD42CF65DA5

 * Delete savegame slots are 0 to 5:
 * 0 - Default save category of 0, see SaveCategory="0" value in mpStatsSetup.xml
 * 1 - Characters stats in slot 0, see SaveCategory="1" value in mpStatsSetup.xml, with the exception of any stat that we want
 * 2 - Characters stats in slot 1, see SaveCategory="1" value in mpStatsSetup.xml, with the exception of any stat that we want
 * 3 - Characters stats in slot 2, see SaveCategory="1" value in mpStatsSetup.xml, with the exception of any stat that we want
 * 4 - Characters stats in slot 3, see SaveCategory="1" value in mpStatsSetup.xml, with the exception of any stat that we want
 * 5 - Characters stats in slot 4, see SaveCategory="1" value in mpStatsSetup.xml, with the exception of any stat that we want
 * p0 is characterSlot? seems range from 0 to 2
 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {boolean}  
 */
export function statDeleteSlot(slot: number): boolean {
	const statDeleteSlot_result = Citizen.invokeNative<boolean>('0xD808EAD42CF65DA5', slot);
	return statDeleteSlot_result;
}