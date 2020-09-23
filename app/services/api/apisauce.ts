import { isJsonObject, QS } from '../../utils/helpers';

export interface RequestConfig {
  baseURL?: string;
  headers?: Dictionary<any>;
  timeout?: number;
}

export type MethodType = 'get' | 'put' | 'delete' | 'post' | 'head';
export type ContentType = 'formData' | 'json' | 'urlencoded' | 'text';

export const getContentType = (headers: Dictionary<any> = {}): ContentType => {
  let contentType: ContentType = 'formData'; // default is formData
  for (const [key, value] of Object.entries(headers)) {
    if (key.toLowerCase() === 'content-type') {
      if (value.indexOf('multipart/form-data') !== -1) {
        contentType = 'formData';
        break;
      } else if (value.indexOf('application/json') !== -1) {
        contentType = 'json';
        break;
      } else if (value.indexOf('application/x-www-form-urlencoded') !== -1) {
        contentType = 'urlencoded';
        break;
      } else {
        contentType = 'text'; // when has content-type, default is 'text'
        break;
      }
    }
  }
  return contentType;
};

const getBodyByContentType = (
  contentType: ContentType,
  payload: any,
): BodyInit_ => {
  if (contentType === 'formData') {
    const bodyInit = new FormData();
    if (isJsonObject(payload)) {
      for (const key in payload) {
        bodyInit.append(key, payload[key]);
      }
    }
    return bodyInit;
  } else if (contentType === 'json') {
    return JSON.stringify(payload);
  } else if (contentType === 'urlencoded') {
    return QS.stringify(payload);
  } else {
    return payload;
  }
};

export const create = (config: RequestConfig = {}) => {
  const { baseURL = '', headers: baseHeaders = {}, timeout = 100000 } = config;

  // const TIMEOUT_RESPONSE = new Response('timeout', { status: 504, statusText: 'timeout' })

  const setHeader = (key: string, value: string) => {
    baseHeaders[key] = value;
  };

  const assemble = async (options: {
    method?: MethodType;
    url?: string;
    body?: BodyInit_;
    config?: RequestConfig;
  }) => {
    const { method = 'get', url = '', body, config = {} } = options;

    const withBody = ['get', 'head', 'delete'].indexOf(method) === -1;

    // handle fetch headers
    const headers = { ...baseHeaders, ...config.headers };
    const contentType = getContentType(headers);

    // handle fetch url
    let requestUrl = `${baseURL}${url}`;
    if (!withBody && body) {
      requestUrl += `?${QS.stringify(body)}`;
    }

    // timeout
    const abortController = new AbortController();
    const requestInit: RequestInit = {
      method: options.method,
      headers,
      signal: abortController.signal,
    };

    // handle fetch body
    if (withBody && body) {
      requestInit.body = getBodyByContentType(contentType, body);
    }

    const timer = setTimeout(() => {
      clearTimeout(timer);
      abortController.abort();
    }, timeout);

    return fetch(requestUrl, requestInit);
  };

  return {
    async get(
      url: string,
      body?: any,
      config?: RequestConfig,
    ): Promise<Response> {
      return await assemble({ method: 'get', url, body, config });
    },
    async post(
      url: string,
      body?: any,
      config?: RequestConfig,
    ): Promise<Response> {
      return await assemble({ method: 'post', url, body, config });
    },
    async put(
      url: string,
      body?: any,
      config?: RequestConfig,
    ): Promise<Response> {
      return await assemble({ method: 'put', url, body, config });
    },
    async delete(
      url: string,
      body?: any,
      config?: RequestConfig,
    ): Promise<Response> {
      return await assemble({ method: 'delete', url, body, config });
    },
    async head(
      url: string,
      body?: any,
      config?: RequestConfig,
    ): Promise<Response> {
      return await assemble({ method: 'head', url, body, config });
    },
    setHeader,
  };
};
