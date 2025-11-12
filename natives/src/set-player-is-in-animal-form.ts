/**
 * MISC:SET_PLAYER_IS_IN_ANIMAL_FORM
 *
 * 0xA818A2A38A2A3D6D

 * 
 * Sets whether the player is using an animal as a model (this flag is entirely controlled by script)
 * 
 * If toggle is true, the ped's head is shown in the pause menu
 * If toggle is false, the ped's head is not shown in the pause menu
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} isInAnimalForm
 */
export function setPlayerIsInAnimalForm(isInAnimalForm: boolean): void {
	const setPlayerIsInAnimalForm_result = Citizen.invokeNative<void>('0xA818A2A38A2A3D6D', isInAnimalForm);
	return setPlayerIsInAnimalForm_result;
}