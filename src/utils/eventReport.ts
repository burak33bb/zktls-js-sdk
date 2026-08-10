import { reportEvent } from '../api/index.js';
import type { EventReportRawData } from '../api/index.js';
import type { Env } from '../types.js';

/**
 * Best-effort telemetry; failures are swallowed so attestation flow is never affected.
 */
export function eventReport(rawDataObj: EventReportRawData, env?: Env): Promise<void> {
  return Promise.resolve()
    .then(() => reportEvent(rawDataObj, env))
    .then(() => undefined)
    .catch(() => undefined);
}
