import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_PED_IS_DRUNK
 *
 * 0x8A19BA162BA1DE3E

 * 
 * Sets the ped drunk sounds.  Only works with PLAYER_PED_ID
 * 
 * ====================================================
 * 
 * As mentioned above, this only sets the drunk sound to ped/player.
 * 
 * To give the Ped a drunk effect with drunk walking animation try using SET_PED_MOVEMENT_CLIPSET
 * 
 * Below is an example
 * 
 * if (!Function.Call<bool>(Hash.HAS_ANIM_SET_LOADED, "move_m@drunk@verydrunk"))
 *                 {
 *                     Function.Call(Hash.REQUEST_ANIM_SET, "move_m@drunk@verydrunk");
 *                 }
 *                 Function.Call(Hash.SET_PED_MOVEMENT_CLIPSET, Ped.Handle, "move_m@drunk@verydrunk", 0x3E800000);
 * 
 * 
 * 
 * And to stop the effect use
 * RESET_PED_MOVEMENT_CLIPSET
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} isDrunk
 */
export function setPedIsDrunk(ped: PedIndex, isDrunk: boolean): void {
	const setPedIsDrunk_result = Citizen.invokeNative<void>('0x8A19BA162BA1DE3E', ped, isDrunk);
	return setPedIsDrunk_result;
}