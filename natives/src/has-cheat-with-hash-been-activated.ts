/**
 * MISC:HAS_CHEAT_WITH_HASH_BEEN_ACTIVATED
 *
 * 0x1DBC8A6F227520FD

 * 
 * Instead of doing HAS_CHEAT_BEEN_ACTIVATED("YURD21X")
 * it would be more efficent to do HAS_CHEAT_WITH_HASH_BEEN_ACTIVATED( HASH("YURD21X"), GET_LENGTH_OF_LITERAL_STRING("YURD21X"))
 * or even HAS_CHEAT_WITH_HASH_BEEN_ACTIVATED( HASH("YURD21X"), 7)
 * 
 * This native appears on the cheat_controller script and tracks a combination of buttons, which may be used to toggle cheats in-game. Credits to ThreeSocks for the info. The hash contains the combination, while the "amount" represents the amount of buttons used in a combination. The following page can be used to make a button combination: gta5offset.com/ts/hash/
 * 
 * INT_SCORES_SCORTED was a hash collision
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} hashOfCheatString
 * @param {number} lengthOfCheatString
 * @returns {boolean}  
 */
export function hasCheatWithHashBeenActivated(hashOfCheatString: number, lengthOfCheatString: number): boolean {
	const hasCheatWithHashBeenActivated_result = Citizen.invokeNative<boolean>('0x1DBC8A6F227520FD', hashOfCheatString, lengthOfCheatString);
	return hasCheatWithHashBeenActivated_result;
}