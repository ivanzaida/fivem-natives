/**
 * MISC:HAS_PC_CHEAT_WITH_HASH_BEEN_ACTIVATED
 *
 * 0x4590C086096F07D8

 * 
 * Get inputted "Cheat code", for example:
 * 
 * while (TRUE)
 * {
 *     if (MISC::HAS_PC_CHEAT_WITH_HASH_BEEN_ACTIVATED(${fugitive}))
 *     {
 *        // Do something.
 *     }
 *     SYSTEM::WAIT(0);
 * }
 * 
 * Calling this will also set the last saved string hash to zero.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} hashOfCheatString
 * @returns {boolean}  
 */
export function hasPcCheatWithHashBeenActivated(hashOfCheatString: number): boolean {
	const hasPcCheatWithHashBeenActivated_result = Citizen.invokeNative<boolean>('0x4590C086096F07D8', hashOfCheatString);
	return hasPcCheatWithHashBeenActivated_result;
}