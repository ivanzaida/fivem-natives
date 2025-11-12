import { ESaveType } from '@ivanzaida/structures'

/**
 * STATS:STAT_SAVE
 *
 * 0x3AADA29651BD7786

 * 
 * Default behaviour is to save the defaul slot (0) and the current slot that the player
 * is using, ie, the value set in stat MPPLY_LAST_MP_CHAR. If you want a diferent slot saved you can pass
 * in a value - 1 to max number os player slots.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @param {boolean} doAssert
 * @param {ESaveType} saveType
 * @param {number} saveReason
 * @returns {boolean}  
 */
export function statSave(slot: number = 0, doAssert: boolean = true, saveType: ESaveType | number = 0, saveReason: number = 0): boolean {
	const statSave_result = Citizen.invokeNative<boolean>('0x3AADA29651BD7786', slot, doAssert, saveType, saveReason);
	return statSave_result;
}