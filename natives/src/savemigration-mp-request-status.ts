/**
 * SAVEMIGRATION:SAVEMIGRATION_MP_REQUEST_STATUS
 *
 * 0x8615C476E6BA23D8

 * 
 * Request the status of the users save migration.
 * Should be called by the game client before entering into multiplayer, on both gen8 and gen9 consoles,
 * so that a user doesn't enter into MP while a transfer is in progress for them, as this would cause them
 * to stomp on the changes being made, potentially corrupting the account.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function savemigrationMpRequestStatus(): boolean {
	const savemigrationMpRequestStatus_result = Citizen.invokeNative<boolean>('0x8615C476E6BA23D8', );
	return savemigrationMpRequestStatus_result;
}