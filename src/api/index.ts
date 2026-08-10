import { request } from '../utils/httpRequest.js';
import { getBaseApi } from '../config/constants.js';
import type { ApiResponse, EventReportRawData, EventReportRequest } from './types.js';
import type { Env } from '../types.js';

export type { ApiResponse, EventDetail, ClientType, EventReportRawData, EventReportRequest } from './types.js';

export function getAppQuote(params: { appId: string }, env?: Env): Promise<ApiResponse> {
  return request<ApiResponse>({
    url: `${getBaseApi(env)}/public/app/quote`,
    method: 'GET',
    params
  });
}

export function reportEvent(rawDataObj: EventReportRawData, env?: Env): Promise<ApiResponse<any[]>> {
  const data: EventReportRequest = {
    eventType: 'ATTESTATION_GENERATE',
    rawData: JSON.stringify(rawDataObj)
  };
  return request<ApiResponse<any[]>>({
    url: `${getBaseApi(env)}/public/event/report`,
    method: 'POST',
    data
  });
}

