/**
 * CFX:FLUSH_RESOURCE_KVP
 *
 * 0XE27C97A0

 * Nonsynchronous operations will not wait for a disk/filesystem flush before returning from a write or delete call. They will be much faster than their synchronous counterparts (e.g., bulk operations), however, a system crash may lose the data to some recent operations.This native ensures all `_NO_SYNC` operations are synchronized with the disk/filesystem.
 * 
 * ------------------------------------------------------------------
 */
export function flushResourceKvp(): void {
	const flushResourceKvp_result = Citizen.invokeNative<void>('0XE27C97A0', );
	return flushResourceKvp_result;
}