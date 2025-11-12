/**
 * NETWORK:NETWORK_PREVENT_SCRIPT_HOST_MIGRATION
 *
 * 0x102543889D51BCB6

 * 
 * Prevents the script host migrating for one frame. This must be repeatedly called while you want to prevent host migration.
 * PLEASE DO NOT ABUSE THIS, WE MUST ALWAYS TRY AND ALLOW MIGRATION WHENEVER POSSIBLE
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkPreventScriptHostMigration(): void {
	const networkPreventScriptHostMigration_result = Citizen.invokeNative<void>('0x102543889D51BCB6', );
	return networkPreventScriptHostMigration_result;
}