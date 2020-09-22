import {create, MethodType} from './apisauce';
import {ApiConfig, DEFAULT_API_CONFIG} from './api-config';
import * as Types from './api.types';

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ReturnType<typeof create>;

  /**
   * Configurable options.
   */
  config: ApiConfig;

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  async generate(apiGen: string, payload?: Dictionary<any>) {
    const parts = apiGen.split(' ');
    const method = (parts.length > 1 ? parts[0] : 'get') as MethodType;
    const apiUrl = parts[parts.length - 1];

    const response = await this.apisauce[method](apiUrl, payload);
    return await response.json();
  }

  async getContents(payload: {
    length?: number;
    offset?: number;
  }): Promise<Types.ContentsResult> {
    return this.generate('/contents', payload);
  }
}

/**
 * export request instanse
 */
const api = new Api();
api.setup();

export const request = api;
