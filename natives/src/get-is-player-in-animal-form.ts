/**
 * MISC:GET_IS_PLAYER_IN_ANIMAL_FORM
 *
 * 0x7B42AC66804829CF

 * 
 * Queries whether the player is using an animal as a model
 * 
 * Although we don't have a jenkins hash for this one, the name is 100% confirmed.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsPlayerInAnimalForm(): boolean {
	const getIsPlayerInAnimalForm_result = Citizen.invokeNative<boolean>('0x7B42AC66804829CF', );
	return getIsPlayerInAnimalForm_result;
}