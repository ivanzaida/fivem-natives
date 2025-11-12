/**
 * STATS:PLAYSTATS_COPY_RANK_INTO_NEW_SLOT
 *
 * 0x51223729D9AEA4FF

 * 
 * Telemetry sent whenever a new character enters GTAO for first time
 * slotUsed - Character slot used (INT)
 * copyOption - Did player reject the 'copy rank option (INT - "0" = YES, "1" = NO, "2” = Player did not have option).
 * propertyAwarded - Property Awarded (INT - "0" to "4", one for each of the 5 options)
 * characterInSlot - does player have existing character in the other slot? Y/N (BOOL)
 * rank - rank of existing character in other slot (INT - send '8001' if player doesn't have an existing character)
 * previousRank - if player deleted a character in order to start a new character in the same slot, what rank was that previous character (INT - send  '8001' if player did not have to delete a previous character)
 * totalTime - total playing time on deleted character slot (INT - send "0" if player did not have an existing character slot).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} slotUsed
 * @param {number} copyOption
 * @param {number} propertyAwarded
 * @param {number} characterInSlot
 * @param {number} rank
 * @param {number} previousRank
 * @param {number} totalTime
 */
export function playstatsCopyRankIntoNewSlot(slotUsed: number, copyOption: number, propertyAwarded: number, characterInSlot: number, rank: number, previousRank: number, totalTime: number): void {
	const playstatsCopyRankIntoNewSlot_result = Citizen.invokeNative<void>('0x51223729D9AEA4FF', slotUsed, copyOption, propertyAwarded, characterInSlot, rank, previousRank, totalTime);
	return playstatsCopyRankIntoNewSlot_result;
}