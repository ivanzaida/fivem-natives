/**
 * CFX:ADD_AUTHORIZED_PARACHUTE_MODEL
 *
 * 0x8AC7AE9

 * Adds the given model name hash to the list of valid models for the player ped's parachute.
 * 
 * ------------------------------------------------------------------
 * @param {number} modelNameHash Name hash of the model to allow to be used for the player ped's parachute
 */
export function addAuthorizedParachuteModel(modelNameHash: number): void {
	const addAuthorizedParachuteModel_result = Citizen.invokeNative<void>('0x8AC7AE9', modelNameHash);
	return addAuthorizedParachuteModel_result;
}