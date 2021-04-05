import {apiBaseUrl} from "@/configs";
import {axios} from "./utils/axios";
import {isUndefinedOrNull, isEmptyString} from "@/utils/helpers";

const queryBuilder = require("query-string");

export default {
  request(url) {
    return new Request(apiBaseUrl + url);
  }
};

export class Request {
  constructor(url) {
    this.url = url;
    this.options = {};
    this.includes = [];
    this.body = null;
    this.params = null;
  }

  withBody(body, shouldSanitize = false) {
    this.body = shouldSanitize ? body : Request._sanitizeData(body);
    return this;
  }

  withIncludes(includes) {
    this.includes = includes;
    return this;
  }

  withHeaders(headers) {
    this.options.headers = headers;
    return this;
  }

  withParams(params) {
    this.params = Request._sanitizeData(params);
    return this;
  }

  getUrl() {
    let queryParams = this._buildQueryParams();
    return this.url + (queryParams ? "?" + queryParams : "");
  }

  patch() {
    return axios.patch(this.getUrl(), this.body, this.options);
  }

  get() {
    return axios.get(this.getUrl(), this.options);
  }

  post() {
    return axios.post(this.getUrl(), this.body, this.options);
  }

  put() {
    return axios.put(this.getUrl(), this.body, this.options);
  }

  delete() {
    return axios.delete(this.getUrl(), this.body, this.options);
  }

  _buildQueryParams() {
    let build = "";
    if (this.includes.length > 0) {
      build += this._buildIncludes() + "&";
    }
    if (this.params) {
      build += this._buildParams();
    }

    return build;
  }

  _buildIncludes() {
    return queryBuilder.stringify({include: this.includes.join(",")});
  }

  _buildParams() {
    return queryBuilder.stringify(this.params, {arrayFormat: "bracket"});
  }

  static _sanitizeData(data) {
    let output = {};
    for (let prop in data) {
      if (!isUndefinedOrNull(data[prop]) && !isEmptyString(data[prop])) {
        output[prop] = data[prop];
      }
    }
    return output;
  }
}
